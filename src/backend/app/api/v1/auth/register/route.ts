// TBM - Register API
// POST /api/v1/auth/register

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'
import { prisma } from '@/lib/db'

// Initialize Supabase Admin
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Validation Schema
const registerSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.enum(['INVESTOR', 'BUSINESS_OWNER', 'BROKER']),
  firstName: z.string().min(1, 'First name required'),
  lastName: z.string().min(1, 'Last name required'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = registerSchema.parse(body)

    // 1. Create user in Supabase Auth
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true, // Auto-confirm for MVP (or set false for email verification)
      user_metadata: {
        role: data.role,
        firstName: data.firstName,
        lastName: data.lastName,
      }
    })

    if (authError) {
      // Check if user exists
      if (authError.message.includes('already been registered')) {
        return NextResponse.json({
          success: false,
          error: { code: 'EMAIL_EXISTS', message: 'Email already registered' }
        }, { status: 400 })
      }
      throw authError
    }

    const userId = authData.user?.id

    if (!userId) {
      throw new Error('Failed to create user')
    }

    // 2. Create user record in our database
    const user = await prisma.user.create({
      data: {
        id: userId,
        email: data.email,
        role: data.role,
        verificationLevel: 'EMAIL', // Email verified
        profile: {
          create: {
            firstName: data.firstName,
            lastName: data.lastName,
          }
        }
      },
      include: {
        profile: true
      }
    })

    // 3. Log audit
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: 'USER_LOGIN',
        resourceType: 'user',
        resourceId: user.id,
      }
    })

    return NextResponse.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          verificationLevel: user.verificationLevel,
        },
        profile: user.profile,
        onboardingStep: 0,
      }
    }, { status: 201 })

  } catch (error: any) {
    console.error('Register error:', error)

    if (error.name === 'ZodError') {
      return NextResponse.json({
        success: false,
        error: { code: 'VALIDATION_ERROR', message: 'Invalid data', details: error.errors }
      }, { status: 400 })
    }

    return NextResponse.json({
      success: false,
      error: { code: 'REGISTER_FAILED', message: 'Registration failed' }
    }, { status: 500 })
  }
}
