"use client"

import { usePiPayment } from "../hooks/usePiPayment"
import type { PaymentData } from "pi-sdk-js"

export function PiPayButton({ paymentData }: { paymentData: PaymentData }) {
  const { pay, status } = usePiPayment(paymentData)

  return (
    <button onClick={pay} disabled={status === "pending"}>
      {status === "pending" ? "Processing..." : "Pay with Pi"}
    </button>
  )
}
