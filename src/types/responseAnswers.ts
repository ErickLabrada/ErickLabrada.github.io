export interface ResponseAnswerDto {
  response_id: string
  question_id: string
  question_slug: string
  question_text: string
  answer_text: string
  selected_option_id: string
  selected_option_value: string
  created_at: string
}

export interface GetResponseAnswersResponse {
  success: boolean
  msg: string
  data: ResponseAnswerDto[]
}