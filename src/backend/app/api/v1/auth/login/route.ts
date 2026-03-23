// TBM - Login API Route
// POST /api/v1/auth/login

import { NextRequest } from 'next/server'
import prisma from '@/lib/db'
import { loginSchema } from '@/lib/validations'
import { apiResponse, apiValidationError, apiError, apiUnauthorized } from '@/lib/api-response'
import { verifyPassword, createSession } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = loginSchema.parse(body)
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { email: data.email },
      include: {
        profile: true,
        subscription: true,
      },
    })
    
    if (!user || !user.passwordHash) {
      return apiUnauthorized('Invalid email or password')
    }
    
    // Verify password
    const isValid = await verifyPassword(data.password, user.passwordHash)
    
    if (!isValid) {
      return apiUnauthorized('Invalid email or password')
    }
    
    // Check if user is active
    if (!user.isActive) {
      return apiUnauthorized('Account is suspended')
    }
    
    // Create session
    const token = await createSession(user.id)
    
    return apiResponse({
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        verificationLevel: user.verificationLevel,
      },
      profile: user.profile,
      token,
    })
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return apiValidationError(error)
    }
    console.error('Login error:', error)
    return apiError('LOGIN_FAILED', 'Login failed', 500)
  }
}