// TBM - Get/Update Current User Profile
// GET /api/v1/users/me
// PATCH /api/v1/users/me

import { NextRequest } from 'next/server'
import prisma from '@/lib/db'
import { updateProfileSchema } from '@/lib/validations'
import { apiResponse, apiValidationError, apiError, requireAuth } from '@/lib/api-response'

// GET - Get current user profile
export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request)
    
    // Get full profile with relations
    const fullUser = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        profile: true,
        subscription: true,
        verifications: {
          orderBy: { createdAt: 'desc' },
        },
        listings: {
          where: { status: 'ACTIVE' },
          take: 5,
          orderBy: { createdAt: 'desc' },
        },
        _count: {
          select: {
            listings: true,
            matchedListings: true,
          },
        },
      },
    })
    
    if (!fullUser) {
      return apiError('USER_NOT_FOUND', 'User not found', 404)
    }
    
    // Remove password hash
    const { passwordHash, ...userWithoutPassword } = fullUser
    
    return apiResponse(userWithoutPassword)
  } catch (error: any) {
    if (error.status === 401) {
      return apiError('UNAUTHORIZED', 'Authentication required', 401)
    }
    console.error('Get profile error:', error)
    return apiError('FETCH_FAILED', 'Failed to fetch profile', 500)
  }
}

// PATCH - Update current user profile
export async function PATCH(request: NextRequest) {
  try {
    const user = await requireAuth(request)
    
    const body = await request.json()
    const data = updateProfileSchema.parse(body)
    
    // Update profile
    const profile = await prisma.profile.update({
      where: { userId: user.id },
      data,
    })
    
    return apiResponse(profile, { message: 'Profile updated successfully' })
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return apiValidationError(error)
    }
    if (error.status === 401) {
      return apiError('UNAUTHORIZED', 'Authentication required', 401)
    }
    console.error('Update profile error:', error)
    return apiError('UPDATE_FAILED', 'Failed to update profile', 500)
  }
}