

export interface UpsertReflectionRequest {
  response_id: string

  primary_emotion: string
  emotional_intensity: number

  felt_seen: boolean
  felt_reduced: boolean
  felt_misunderstood: boolean
  felt_exposed: boolean
  felt_validated: boolean
  felt_defensive: boolean

  notes?: string
}
