// TBM - Auth Utilities
// Thailand Business Matching Platform

import { NextRequest } from 'next/server'
import prisma from './db'
import { apiUnauthorized } from './api-response'

// Simple session management (replace with proper JWT in production)
const sessions = new Map<string, { userId: string; expiresAt: Date }>()

// Generate a simple session token
function generateSessionToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// Create session for user
export async function createSession(userId: string): Promise<string> {
  const token = generateSessionToken()
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
  
  sessions.set(token, { userId, expiresAt })
  
  return token
}

// Get current user from session
export async function getCurrentUser(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  
  if (!token) {
    return null
  }
  
  const session = sessions.get(token)
  
  if (!session || session.expiresAt < new Date()) {
    sessions.delete(token)
    return null
  }
  
  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    include: {
      profile: true,
      subscription: true,
    },
  })
  
  return user
}

// Require authentication
export async function requireAuth(request: NextRequest) {
  const user = await getCurrentUser(request)
  
  if (!user) {
    throw apiUnauthorized('Authentication required')
  }
  
  return user
}

// Destroy session
export function destroySession(token: string) {
  sessions.delete(token)
}

// Password hashing (use bcrypt in production)
export async function hashPassword(password: string): Promise<string> {
  // Simple hash - replace with bcrypt in production
  const encoder = new TextEncoder()
  const data = encoder.encode(password + 'tbm-salt-2026')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

// Verify password
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const passwordHash = await hashPassword(password)
  return passwordHash === hash
}