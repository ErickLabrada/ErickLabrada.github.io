import type { LoginRequest, LoginResponse } from '@/types/auth'
import type { FormDto, GetFormsResponse, GetFormResponse } from '@/types/forms'
import type { SubmitResponseRequest, ResponseDto, GetResponsesResponse, UnreflectedResponseDto,GetUnreflectedResponsesResponse } from '@/types/responses'
import type { UpsertReflectionRequest } from '@/types/reflections'
import type { GetResponseAnswersResponse } from '@/types/responseAnswers'
const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080'

class ApiService {
  private token: string | null = null

  setToken(token: string) {
    this.token = token
    localStorage.setItem('auth_token', token)
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('auth_token')
  }

  clearToken() {
    this.token = null
    localStorage.removeItem('auth_token')
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE}${endpoint}`
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...options.headers as Record<string, string>,
    }

    if (this.getToken()) {
      headers.Authorization = `Bearer ${this.getToken()}`
    }

    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const errorBody = await response.text()

      throw new Error(
        `API Error ${response.status}: ${errorBody || response.statusText}`
      )
    }
    return response.json()
  }

  // Auth
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await this.request<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    })

    if (!response.Success) {
      throw new Error(response.Msg || 'Login failed')
    }

    this.setToken(response.Data.AccessToken)

    return response
  }

  // Forms
  async getForms(): Promise<GetFormsResponse> {
    return this.request<GetFormsResponse>('/forms')
  }

  async getFormBySlug(slug: string): Promise<GetFormResponse> {
    return this.request<GetFormResponse>(`/forms/single?slug=${slug}`)
  }

  // ---------------- RESPONSES ----------------
  async getResponses(): Promise<GetResponsesResponse> {
    return this.request('/responses')
  }

  async getResponseById(id: string): Promise<ResponseDto> {
    return this.request(`/responses/single?id=${id}`)
  }

  async getResponseAnswers(responseId?: string): Promise<GetResponseAnswersResponse> {
    const query = responseId ? `?response_id=${responseId}` : ''
    return this.request(`/responses/answers${query}`)
  }

  async submitResponse(
  data: SubmitResponseRequest
): Promise<{ success: boolean }> {
  return this.request('/responses/submit', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}


async getUnreflectedResponses():
Promise<GetUnreflectedResponsesResponse> {
  return this.request('/responses/unreflected')
}
  async getUnreflectedResponseFull(id: string): Promise<ResponseDto> {
    return this.request(`/responses/unreflected/full?id=${id}`)
  }

  // ---------------- REFLECTIONS ----------------
  async upsertReflection(data: UpsertReflectionRequest): Promise<{ success: boolean }> {
    return this.request('/reflections', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }
}


export const apiService = new ApiService()