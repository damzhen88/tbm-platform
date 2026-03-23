// TBM - Document API
// POST /api/v1/documents
// GET /api/v1/documents

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'
import { prisma } from '@/lib/db'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Upload Schema
const uploadSchema = z.object({
  listingId: z.string().optional(),
  type: z.enum(['pitch_deck', 'financial', 'legal', 'nda', 'other']),
  name: z.string().min(1),
  accessLevel: z.enum(['PRIVATE', 'NDA_REQUIRED', 'PUBLIC']).default('NDA_REQUIRED'),
  // Base64 encoded file (for MVP simplicity)
  fileData: z.string(),
  mimeType: z.string(),
})

// POST - Upload Document
export async function POST(request: NextRequest) {
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

    const body = await request.json()
    const data = uploadSchema.parse(body)

    // Decode base64 and upload to Supabase Storage
    const buffer = Buffer.from(data.fileData, 'base64')
    const fileName = `${supabaseUser.id}/${Date.now()}_${data.name}`
    
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from('documents')
      .upload(fileName, buffer, {
        contentType: data.mimeType,
        upsert: false
      })

    if (uploadError) {
      throw uploadError
    }

    // Get public URL
    const { data: urlData } = supabaseAdmin.storage
      .from('documents')
      .getPublicUrl(fileName)

    // Create document record
    const document = await prisma.document.create({
      data: {
        userId: supabaseUser.id,
        listingId: data.listingId,
        type: data.type,
        name: data.name,
        fileUrl: urlData.publicUrl,
        fileSize: buffer.length,
        mimeType: data.mimeType,
        accessLevel: data.accessLevel,
      }
    })

    // Audit log
    await prisma.auditLog.create({
      data: {
        userId: supabaseUser.id,
        action: 'DOCUMENT_UPLOADED',
        resourceType: 'document',
        resourceId: document.id,
        metadata: { type: data.type, name: data.name }
      }
    })

    return NextResponse.json({
      success: true,
      data: {
        id: document.id,
        name: document.name,
        type: document.type,
        url: document.fileUrl,
      }
    }, { status: 201 })

  } catch (error: any) {
    console.error('Upload error:', error)
    return NextResponse.json({ success: false, error: { code: 'UPLOAD_FAILED' } }, { status: 500 })
  }
}

// GET - List Documents
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

    const { searchParams } = new URL(request.url)
    const listingId = searchParams.get('listingId')

    // Build query - users can see their own docs + public docs
    const documents = await prisma.document.findMany({
      where: {
        OR: [
          { userId: supabaseUser.id },
          { accessLevel: 'PUBLIC' },
          // NDA required but signed
          { 
            accessLevel: 'NDA_REQUIRED',
            listingId,
            listing: {
              ndaSignatures: {
                some: {
                  signerId: supabaseUser.id,
                  status: 'SIGNED'
                }
              }
            }
          }
        ],
        isActive: true,
      },
      select: {
        id: true,
        name: true,
        type: true,
        accessLevel: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ success: true, data: documents })

  } catch (error: any) {
    console.error('List documents error:', error)
    return NextResponse.json({ success: false, error: { code: 'LIST_FAILED' } }, { status: 500 })
  }
}
