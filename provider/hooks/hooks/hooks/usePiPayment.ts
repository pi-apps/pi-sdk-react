import { useState, useCallback } from "react"
import type { PaymentData } from "pi-sdk-js"
import { validatePaymentData } from "../core/payment-validator"
import { PiSdkErrorCode } from "../core/error"

type PaymentStatus = "idle" | "pending" | "success" | "failed" | "cancelled"

export function usePiPayment(paymentData: PaymentData) {
  const [status, setStatus] = useState<PaymentStatus>("idle")
  const [txid, setTxid] = useState<string | null>(null)
  const [error, setError] = useState<any>(null)

  const pay = useCallback(async () => {
    try {
      validatePaymentData(paymentData)
      if (!window.Pi) throw { code: PiSdkErrorCode.SDK_NOT_LOADED }

      setStatus("pending")

      await window.Pi.createPayment(paymentData, {
        onReadyForServerApproval(paymentId) {
          // kirim paymentId ke backend
        },
        onReadyForServerCompletion(paymentId, txid) {
          setTxid(txid)
        },
        onCancel() {
          setStatus("cancelled")
        },
        onError(err) {
          setError(err)
          setStatus("failed")
        }
      })

      setStatus("success")
    } catch (e) {
      setError(e)
      setStatus("failed")
    }
  }, [paymentData])

  return { pay, status, txid, error }
}
