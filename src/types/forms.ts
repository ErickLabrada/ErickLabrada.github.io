export interface QuestionOptionDto {
  id: string
  value: string
  display_name: string
  hover_description?: string
  display_order: number
}

export interface QuestionDto {
  id: string
  slug: string
  question_text: string
  question_description?: string
  question_type: string
  placeholder?: string
  is_required: boolean
  display_order: number
  options?: QuestionOptionDto[]
}

export interface FormDto {
  id: string
  slug: string
  title: string
  description?: string
  form_type: string
  display_order: number
  is_active: boolean
  questions?: QuestionDto[]
}

export interface GetFormsResponse {
  success: boolean
  data: FormDto[]
}

export interface GetFormResponse {
  success: boolean
  data: FormDto
}