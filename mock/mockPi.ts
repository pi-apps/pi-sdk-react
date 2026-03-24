export function setupMockPi() {
  if (window.Pi) return

  window.Pi = {
    authenticate(scopes, onSuccess) {
      onSuccess({ user: { uid: "mock-user", username: "dev" } })
    },
    createPayment(data, callbacks) {
      setTimeout(() => {
        callbacks.onReadyForServerApproval("mock-payment-id")
        callbacks.onReadyForServerCompletion("mock-payment-id", "mock-txid")
      }, 1000)
    }
  }
}
