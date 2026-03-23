// Supabase Client Configuration
import { createClient } from '@supabase/supabase-js'

const getSupabaseUrl = () => {
  if (typeof window !== 'undefined') {
    return (window as any).__NEXT_DATA__?.props?.pageProps?.supabaseUrl || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
  }
  return process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
}

const getSupabaseAnonKey = () => {
  if (typeof window !== 'undefined') {
    return (window as any).__NEXT_DATA__?.props?.pageProps?.supabaseAnonKey || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'
  }
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'
}

let supabaseInstance: ReturnType<typeof createClient> | null = null

export const supabase = (() => {
  if (supabaseInstance) return supabaseInstance
  
  const supabaseUrl = getSupabaseUrl()
  const supabaseAnonKey = getSupabaseAnonKey()
  
  if (!supabaseUrl || supabaseUrl === 'https://your-project.supabase.co') {
    // Return a mock client for development
    return {
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } }, error: null }),
        signInWithPassword: async () => ({ data: { user: null, session: null }, error: { message: 'Configure Supabase' } }),
        signUp: async () => ({ data: { user: null, session: null }, error: { message: 'Configure Supabase' } }),
        signOut: async () => ({ error: null }),
      },
    } as any
  }
  
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    }
  })
  
  return supabaseInstance
})()

// For server-side operations
export const getSupabaseAdmin = () => {
  const supabaseUrl = getSupabaseUrl()
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  
  if (!supabaseUrl || supabaseUrl === 'https://your-project.supabase.co') {
    return null
  }
  
  return createClient(supabaseUrl, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    }
  })
}
