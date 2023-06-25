export interface IStatusCode {
  statusCode: string | number
  name: string
  description: string
}

export type TStatusCode = 'success' | 'client_error' | 'server_error'
