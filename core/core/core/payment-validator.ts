import type { PaymentData } from "pi-sdk-js"
import { PiSdkError, PiSdkErrorCode } from "./error"

export function validatePaymentData(data: PaymentData) {
  if (!data.amount || data.amount <= 0) {
    throw new PiSdkError(PiSdkErrorCode.INVALID_PAYMENT, "Invalid amount")
  }
  if (!data.memo) {
    throw new PiSdkError(PiSdkErrorCode.INVALID_PAYMENT, "Memo is required")
  }
  try {
    JSON.stringify(data.metadata ?? {})
  } catch {
    throw new PiSdkError(PiSdkErrorCode.INVALID_PAYMENT, "Metadata must be serializable")
  }
}
