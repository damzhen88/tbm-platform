// TBM - Create Listing API Route
// POST /api/v1/listings

import { NextRequest } from 'next/server'
import prisma from '@/lib/db'
import { createListingSchema } from '@/lib/validations'
import { apiResponse, apiValidationError, apiError, apiCreated, requireAuth } from '@/lib/api-response'

// Generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 50) + '-' + Date.now().toString(36)
}

export async function POST(request: NextRequest) {
  try {
    // Require authentication
    const user = await requireAuth(request)
    
    const body = await request.json()
    const data = createListingSchema.parse(body)
    
    // Check verification level for some listing types
    if (['FUNDRAISING', 'SALE'].includes(data.type) && user.verificationLevel === 'BASIC') {
      return apiError(
        'VERIFICATION_REQUIRED',
        'Identity verification required to create this listing type',
        403
      )
    }
    
    // Create listing
    const listing = await prisma.listing.create({
      data: {
        userId: user.id,
        type: data.type,
        title: data.title,
        slug: generateSlug(data.title),
        description: data.description,
        industry: data.industry,
        stage: data.stage,
        location: data.location,
        amount: data.amount,
        valuation: data.valuation,
        equityOffered: data.equityOffered,
        status: 'DRAFT',
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            profile: {
              select: {
                firstName: true,
                lastName: true,
                companyName: true,
              },
            },
          },
        },
      },
    })
    
    return apiCreated(listing, { message: 'Listing created successfully' })
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return apiValidationError(error)
    }
    if (error.status === 401) {
      return apiError('UNAUTHORIZED', 'Authentication required', 401)
    }
    console.error('Create listing error:', error)
    return apiError('CREATE_FAILED', 'Failed to create listing', 500)
  }
}