// TBM - API Response Utilities
// Thailand Business Matching Platform

import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

// Success Response
export function apiResponse<T>(data: T, meta?: { page?: number; limit?: number; total?: number }) {
  return NextResponse.json(
    {
      success: true,
      data,
      ...(meta && { meta }),
    },
    { status: 200 }
  )
}

// Created Response
export function apiCreated<T>(data: T) {
  return NextResponse.json(
    {
      success: true,
      data,
    },
    { status: 201 }
  )
}

// No Content
export function apiNoContent() {
  return new NextResponse(null, { status: 204 })
}

// Error Response
export interface ApiError {
  success: false
  error: {
    code: string
    message: string
    details?: Record<string, string[]>
  }
}

export function apiError(
  code: string,
  message: string,
  status: number = 400,
  details?: Record<string, string[]>
): NextResponse<ApiError> {
  return NextResponse.json(
    {
      success: false,
      error: {
        code,
        message,
        ...(details && { details }),
      },
    },
    { status }
  )
}

// Not Found
export function apiNotFound(message: string = 'Resource not found') {
  return apiError('NOT_FOUND', message, 404)
}

// Unauthorized
export function apiUnauthorized(message: string = 'Unauthorized') {
  return apiError('UNAUTHORIZED', message, 401)
}

// Forbidden
export function apiForbidden(message: string = 'Forbidden') {
  return apiError('FORBIDDEN', message, 403)
}

// Validation Error
export function apiValidationError(error: ZodError) {
  const details: Record<string, string[]> = {}
  
  error.errors.forEach((err) => {
    const path = err.path.join('.')
    if (!details[path]) {
      details[path] = []
    }
    details[path].push(err.message)
  })

  return apiError('VALIDATION_ERROR', 'Invalid request data', 400, details)
}

// Server Error
export function apiServerError(message: string = 'Internal server error') {
  return apiError('INTERNAL_ERROR', message, 500)
}

// Paginated Response Helper
export function paginatedResponse<T>(
  data: T[],
  page: number,
  limit: number,
  total: number
) {
  return apiResponse(data, {
    page,
    limit,
    total,
  })
}