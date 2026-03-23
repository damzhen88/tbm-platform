// TBM - Get Listings API Route
// GET /api/v1/listings

import { NextRequest } from 'next/server'
import prisma from '@/lib/db'
import { listingFilterSchema } from '@/lib/validations'
import { apiResponse, apiValidationError, paginatedResponse } from '@/lib/api-response'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const params = Object.fromEntries(searchParams.entries())
    
    const filters = listingFilterSchema.parse(params)
    const { page, limit, sortBy, sortOrder, ...filterParams } = filters
    
    // Build where clause
    const where: any = {
      status: filters.status || 'ACTIVE',
    }
    
    if (filterParams.type) {
      where.type = filterParams.type
    }
    
    if (filterParams.industry) {
      where.industry = { has: filterParams.industry }
    }
    
    if (filterParams.stage) {
      where.stage = filterParams.stage
    }
    
    if (filterParams.location) {
      where.location = { contains: filterParams.location, mode: 'insensitive' }
    }
    
    if (filterParams.minAmount) {
      where.amount = { ...where.amount, gte: filterParams.minAmount }
    }
    
    if (filterParams.maxAmount) {
      where.amount = { ...where.amount, lte: filterParams.maxAmount }
    }
    
    if (filterParams.search) {
      where.OR = [
        { title: { contains: filterParams.search, mode: 'insensitive' } },
        { description: { contains: filterParams.search, mode: 'insensitive' } },
      ]
    }
    
    // Calculate pagination
    const skip = (page - 1) * limit
    
    // Get total count
    const total = await prisma.listing.count({ where })
    
    // Get listings with relations
    const listings = await prisma.listing.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            verificationLevel: true,
            profile: {
              select: {
                firstName: true,
                lastName: true,
                companyName: true,
                avatarUrl: true,
              },
            },
          },
        },
        _count: {
          select: {
            matches: true,
          },
        },
      },
      orderBy: {
        [sortBy]: sortOrder,
      },
      skip,
      take: limit,
    })
    
    return paginatedResponse(listings, page, limit, total)
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return apiValidationError(error)
    }
    console.error('Get listings error:', error)
    return apiResponse({ error: 'Failed to fetch listings' }, 500)
  }
}