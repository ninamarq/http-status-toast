export interface IStatusCode {
  statusCode: string | number
  name: string
  description: string
}

export type TStatusCode = 'success' | 'client_error' | 'server_error' | 'unknown'

export enum EStatusTheme {
  SUCCESS = 'success',
  CLIENT_ERROR = 'client_error',
  SERVER_ERROR = 'server_error',
  UNKNOWN = 'unknown'
}
