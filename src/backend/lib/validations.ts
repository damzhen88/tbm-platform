// TBM - Validation Schemas
// Thailand Business Matching Platform

import { z } from 'zod'

// ============================================
// Auth Schemas
// ============================================

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  role: z.enum(['USER', 'INVESTOR', 'BROKER']).optional().default('USER'),
})

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>

// ============================================
// Profile Schemas
// ============================================

export const updateProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  bio: z.string().optional(),
  linkedinUrl: z.string().url().optional().or(z.literal('')),
  phone: z.string().optional(),
  location: z.string().optional(),
  investorType: z.enum(['ANGEL', 'VC', 'PE', 'CORPORATE']).optional(),
  investmentRangeMin: z.number().positive().optional(),
  investmentRangeMax: z.number().positive().optional(),
  industries: z.array(z.string()).optional(),
  companyName: z.string().optional(),
  companyWebsite: z.string().url().optional().or(z.literal('')),
  foundedDate: z.string().datetime().optional(),
  employeeCount: z.number().int().positive().optional(),
  revenueRange: z.string().optional(),
})

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>

// ============================================
// Listing Schemas
// ============================================

export const createListingSchema = z.object({
  type: z.enum(['FUNDRAISING', 'SALE', 'COFOUNDER', 'PARTNER', 'ACQUISITION']),
  title: z.string().min(5, 'Title must be at least 5 characters').max(255),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  industry: z.array(z.string()).min(1, 'At least one industry is required'),
  stage: z.enum(['IDEA', 'PRE_SEED', 'SEED', 'SERIES_A', 'SERIES_B', 'BOOTSTRAP', 'PROFITABLE']),
  location: z.string().optional(),
  amount: z.number().positive().optional(),
  valuation: z.number().positive().optional(),
  equityOffered: z.string().optional(),
})

export const updateListingSchema = z.object({
  title: z.string().min(5).max(255).optional(),
  description: z.string().min(20).optional(),
  industry: z.array(z.string()).min(1).optional(),
  stage: z.enum(['IDEA', 'PRE_SEED', 'SEED', 'SERIES_A', 'SERIES_B', 'BOOTSTRAP', 'PROFITABLE']).optional(),
  location: z.string().optional(),
  amount: z.number().positive().optional(),
  valuation: z.number().positive().optional(),
  equityOffered: z.string().optional(),
  status: z.enum(['DRAFT', 'ACTIVE', 'PAUSED', 'CLOSED']).optional(),
  isFeatured: z.boolean().optional(),
})

export const listingFilterSchema = z.object({
  type: z.enum(['FUNDRAISING', 'SALE', 'COFOUNDER', 'PARTNER', 'ACQUISITION']).optional(),
  industry: z.string().optional(),
  stage: z.string().optional(),
  location: z.string().optional(),
  minAmount: z.coerce.number().positive().optional(),
  maxAmount: z.coerce.number().positive().optional(),
  status: z.enum(['DRAFT', 'ACTIVE', 'PAUSED', 'CLOSED']).optional().default('ACTIVE'),
  search: z.string().optional(),
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(20),
  sortBy: z.enum(['createdAt', 'viewsCount', 'amount']).optional().default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).optional().default('desc'),
})

export type CreateListingInput = z.infer<typeof createListingSchema>
export type UpdateListingInput = z.infer<typeof updateListingSchema>
export type ListingFilterInput = z.infer<typeof listingFilterSchema>

// ============================================
// Message Schemas
// ============================================

export const sendMessageSchema = z.object({
  conversationId: z.string().cuid().optional(),
  recipientId: z.string().cuid().optional(),
  content: z.string().min(1, 'Message content is required').max(5000),
})

export const createConversationSchema = z.object({
  recipientId: z.string().cuid(),
  listingId: z.string().cuid().optional(),
  initialMessage: z.string().min(1).max(5000).optional(),
})

export type SendMessageInput = z.infer<typeof sendMessageSchema>
export type CreateConversationInput = z.infer<typeof createConversationSchema>

// ============================================
// Match Schemas
// ============================================

export const updateMatchSchema = z.object({
  status: z.enum(['SUGGESTED', 'INTERESTED', 'PASSED', 'CONNECTED']),
})

export type UpdateMatchInput = z.infer<typeof updateMatchSchema>

// ============================================
// Pagination
// ============================================

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(20),
})

export type PaginationInput = z.infer<typeof paginationSchema>