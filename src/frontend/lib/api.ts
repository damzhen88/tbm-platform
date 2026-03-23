// API Client for TBM Backend

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1'

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: Record<string, string[]>
  }
}

class ApiClient {
  private baseUrl: string
  private token: string | null = null

  constructor(baseUrl: string = API_URL) {
    this.baseUrl = baseUrl
  }

  setToken(token: string) {
    this.token = token
  }

  clearToken() {
    this.token = null
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    if (this.token) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${this.token}`
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          success: false,
          error: data.error || { code: 'UNKNOWN', message: 'Request failed' }
        }
      }

      return { success: true, data }
    } catch (error: any) {
      return {
        success: false,
        error: { code: 'NETWORK_ERROR', message: error.message }
      }
    }
  }

  // Auth
  async register(data: {
    email: string
    password: string
    role: 'INVESTOR' | 'BUSINESS_OWNER' | 'BROKER'
    firstName: string
    lastName: string
  }) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  }

  async logout() {
    this.clearToken()
    return { success: true }
  }

  async getCurrentUser() {
    return this.request('/auth/me')
  }

  // KYC
  async submitKYC(data: {
    consent: { agreedToTerms: boolean; agreedToPrivacy: boolean }
    idCardFrontUrl: string
    idCardBackUrl: string
    selfieUrl: string
  }) {
    return this.request('/kyc', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async getKYCStatus() {
    return this.request('/kyc')
  }

  // Documents
  async uploadDocument(data: {
    listingId?: string
    type: string
    name: string
    accessLevel: 'PRIVATE' | 'NDA_REQUIRED' | 'PUBLIC'
    fileData: string
    mimeType: string
  }) {
    return this.request('/documents', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async getDocuments(listingId?: string) {
    const params = listingId ? `?listingId=${listingId}` : ''
    return this.request(`/documents${params}`)
  }

  // Listings
  async getListings(filters?: {
    type?: string
    industry?: string
    stage?: string
    location?: string
    page?: number
    limit?: number
  }) {
    const params = new URLSearchParams()
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.set(key, String(value))
      })
    }
    const query = params.toString() ? `?${params.toString()}` : ''
    return this.request(`/listings${query}`)
  }

  async getListing(id: string) {
    return this.request(`/listings/${id}`)
  }

  async createListing(data: any) {
    return this.request('/listings', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateListing(id: string, data: any) {
    return this.request(`/listings/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }

  // NDA
  async requestNDA(listingId: string) {
    return this.request('/nda/request', {
      method: 'POST',
      body: JSON.stringify({ listingId }),
    })
  }

  async signNDA(listingId: string) {
    return this.request('/nda/sign', {
      method: 'POST',
      body: JSON.stringify({ listingId }),
    })
  }

  // User Profile
  async getProfile() {
    return this.request('/users/me')
  }

  async updateProfile(data: any) {
    return this.request('/users/me', {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }
}

export const api = new ApiClient()
export default api
