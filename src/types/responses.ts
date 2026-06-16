export interface SubmitAnswerDto {
  question_slug: string

  answer_text?: string

  selected_option_value?: string
}

export interface SubmitResponseRequest {
  answers: SubmitAnswerDto[]
}

export interface ResponseAnswerDto {
  question_id: string

  question_slug: string

  question_text: string

  answer_text?: string

  selected_option_id?: string

  selected_option_value?: string

  created_at: string
}

export interface ResponseDto {
  id: string

  created_at: string

  archived: boolean

  sentiment_score?: number

  sentiment_label?: string

  answers: ResponseAnswerDto[]
}

export interface UnreflectedResponseDto {
  response_id: string
  created_at: string
  answers: ResponseAnswerDto[]
}

export interface GetUnreflectedResponsesResponse {
  success: boolean
  msg: string
  data: UnreflectedResponseDto[]
}

export interface GetResponsesResponse {
  success: boolean

  msg: string

  data: UnreflectedResponseDto[]
}


export interface UnreflectedResponseWithAnswersDto {
  response_id: string
  created_at: string
  answers: ResponseAnswerDto[]
}