'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { supabase } from '@/lib/supabase'
import api from '@/lib/api'

interface User {
  id: string
  email: string
  role: string
  verificationLevel: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signUp: (data: { email: string; password: string; role: string; firstName: string; lastName: string }) => Promise<{ success: boolean; error?: string }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then((result: any) => {
      const session = result.data?.session
      if (session) {
        api.setToken(session.access_token)
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          role: (session.user.user_metadata as any)?.role || 'BUSINESS_OWNER',
          verificationLevel: 'EMAIL',
        })
      }
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      if (session) {
        api.setToken(session.access_token)
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          role: (session.user.user_metadata as any)?.role || 'BUSINESS_OWNER',
          verificationLevel: 'EMAIL',
        })
      } else {
        api.clearToken()
        setUser(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return { success: false, error: error.message }
      }

      if (data.session) {
        api.setToken(data.session.access_token)
        setUser({
          id: data.user.id,
          email: data.user.email || '',
          role: data.user.user_metadata?.role || 'BUSINESS_OWNER',
          verificationLevel: 'EMAIL',
        })
      }

      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  const signUp = async (data: { email: string; password: string; role: string; firstName: string; lastName: string }) => {
    try {
      const { data: authData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            role: data.role,
            firstName: data.firstName,
            lastName: data.lastName,
          },
        },
      })

      if (error) {
        return { success: false, error: error.message }
      }

      // Also create user in our backend
      await api.register({
        email: data.email,
        password: data.password,
        role: data.role as 'INVESTOR' | 'BUSINESS_OWNER' | 'BROKER',
        firstName: data.firstName,
        lastName: data.lastName,
      })

      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    api.clearToken()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
