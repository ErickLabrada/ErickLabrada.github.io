export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  Success: boolean
  Msg: string
  Data: {
    AccessToken: string
    Username: string
  }
}