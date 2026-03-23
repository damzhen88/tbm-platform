// TBM - KYC Submission API
// POST /api/v1/kyc

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Consent Schema - PDPA Compliance
const consentSchema = z.object({
  agreedToTerms: z.boolean().refine(val => val === true, 'Must agree to terms'),
  agreedToPrivacy: z.boolean().refine(val => val === true, 'Must agree to privacy policy'),
})

// KYC Submission Schema
const kycSchema = z.object({
  consent: consentSchema,
  // Frontend will upload files separately and send URLs
  idCardFrontUrl: z.string().url(),
  idCardBackUrl: z.string().url(),
  selfieUrl: z.string().url(),
})

export async function POST(request: NextRequest) {
  try {
    // 1. Verify authentication
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json({
        success: false,
        error: { code: 'UNAUTHORIZED', message: 'Authentication required' }
      }, { status: 401 })
    }

    const token = authHeader.replace('Bearer ', '')
    const { data: { user: supabaseUser }, error: verifyError } = await supabaseAdmin.auth.getUser(token)

    if (verifyError || !supabaseUser) {
      return NextResponse.json({
        success: false,
        error: { code: 'UNAUTHORIZED', message: 'Invalid token' }
      }, { status: 401 })
    }

    const body = await request.json()
    const data = kycSchema.parse(body)

    // 2. Check existing KYC
    const existingKYC = await prisma.kYCSubmission.findUnique({
      where: { userId: supabaseUser.id }
    })

    if (existingKYC && existingKYC.status === 'APPROVED') {
      return NextResponse.json({
        success: false,
        error: { code: 'KYC_ALREADY_VERIFIED', message: 'Already verified' }
      }, { status: 400 })
    }

    if (existingKYC && existingKYC.status === 'PENDING') {
      return NextResponse.json({
        success: false,
        error: { code: 'KYC_PENDING', message: 'KYC already submitted' }
      }, { status: 400 })
    }

    // 3. Create or update KYC submission
    const kyc = await prisma.kYCSubmission.upsert({
      where: { userId: supabaseUser.id },
      update: {
        idCardFrontUrl: data.idCardFrontUrl,
        idCardBackUrl: data.idCardBackUrl,
        selfieUrl: data.selfieUrl,
        status: 'PENDING',
      },
      create: {
        userId: supabaseUser.id,
        idCardFrontUrl: data.idCardFrontUrl,
        idCardBackUrl: data.idCardBackUrl,
        selfieUrl: data.selfieUrl,
        status: 'PENDING',
      }
    })

    // 4. Update user verification level
    await prisma.user.update({
      where: { id: supabaseUser.id },
      data: { verificationLevel: 'ID_PENDING' }
    })

    // 5. Log audit
    await prisma.auditLog.create({
      data: {
        userId: supabaseUser.id,
        action: 'KYC_SUBMITTED',
        resourceType: 'kyc',
        resourceId: kyc.id,
        metadata: { status: 'PENDING' }
      }
    })

    return NextResponse.json({
      success: true,
      data: {
        status: kyc.status,
        message: 'KYC submitted successfully. Please allow 1-2 business days for review.'
      }
    }, { status: 201 })

  } catch (error: any) {
    console.error('KYC submission error:', error)

    if (error.name === 'ZodError') {
      return NextResponse.json({
        success: false,
        error: { code: 'VALIDATION_ERROR', message: 'Invalid data', details: error.errors }
      }, { status: 400 })
    }

    return NextResponse.json({
      success: false,
      error: { code: 'KYC_FAILED', message: 'Failed to submit KYC' }
    }, { status: 500 })
  }
}

// GET - Get KYC Status
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json({ success: false, error: { code: 'UNAUTHORIZED' } }, { status: 401 })
    }

    const token = authHeader.replace('Bearer ', '')
    const { data: { user: supabaseUser } } = await supabaseAdmin.auth.getUser(token)

    if (!supabaseUser) {
      return NextResponse.json({ success: false, error: { code: 'UNAUTHORIZED' } }, { status: 401 })
    }

    const kyc = await prisma.kYCSubmission.findUnique({
      where: { userId: supabaseUser.id }
    })

    return NextResponse.json({
      success: true,
      data: kyc ? {
        status: kyc.status,
        submittedAt: kyc.createdAt,
        reviewedAt: kyc.reviewedAt,
        rejectionReason: kyc.rejectionReason,
      } : {
        status: 'NOT_SUBMITTED'
      }
    })

  } catch (error: any) {
    console.error('Get KYC error:', error)
    return NextResponse.json({ success: false, error: { code: 'GET_KYC_FAILED' } }, { status: 500 })
  }
}
