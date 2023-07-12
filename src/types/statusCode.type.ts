import { TLang } from ".";

export interface IStatusCode {
  statusCode: string | number;
  name: string;
  description: string;
}

export type TStatusCode =
  | "success"
  | "client_error"
  | "server_error"
  | "unknown";

export enum EStatusTheme {
  SUCCESS = "success",
  CLIENT_ERROR = "client_error",
  SERVER_ERROR = "server_error",
  UNKNOWN = "unknown",
}

export type SuccessStatusCode = 200 | 204;

export type ClientErrorStatusCode =
  | 400
  | 401
  | 403
  | 404
  | 409
  | 422
  | 429
  | 499;

export type ServerErrorStatusCode = 500 | 502 | 504;

export type StatusCodes = SuccessStatusCode &
  ClientErrorStatusCode &
  ServerErrorStatusCode;

export type StatusTranslations = {
  [status in TStatusCode]: {
    [lang in TLang]: string;
  };
};
