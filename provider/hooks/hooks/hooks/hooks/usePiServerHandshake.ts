export function usePiServerHandshake(handlers: {
  onApprove?: (paymentId: string) => Promise<void>
  onComplete?: (txid: string) => Promise<void>
  onFail?: (reason: string) => void
}) {
  return {
    approve: handlers.onApprove,
    complete: handlers.onComplete,
    fail: handlers.onFail
  }
}
