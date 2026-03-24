export enum PiSdkErrorCode {
  SDK_NOT_LOADED = "SDK_NOT_LOADED",
  NOT_READY = "NOT_READY",
  USER_REJECTED = "USER_REJECTED",
  INVALID_PAYMENT = "INVALID_PAYMENT",
  NETWORK_ERROR = "NETWORK_ERROR",
  UNKNOWN = "UNKNOWN"
}

export class PiSdkError extends Error {
  code: PiSdkErrorCode
  constructor(code: PiSdkErrorCode, message?: string) {
    super(message ?? code)
    this.code = code
  }
}
