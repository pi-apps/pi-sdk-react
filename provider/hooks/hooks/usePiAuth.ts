import { useState, useCallback } from "react"
import { PiSdkError, PiSdkErrorCode } from "../core/error"

export function usePiAuth() {
  const [user, setUser] = useState<any>(null)
  const [authenticated, setAuthenticated] = useState(false)

  const authenticate = useCallback(async () => {
    if (!window.Pi) {
      throw new PiSdkError(PiSdkErrorCode.SDK_NOT_LOADED)
    }

    return new Promise((resolve, reject) => {
      window.Pi.authenticate([], (auth) => {
        setUser(auth.user)
        setAuthenticated(true)
        resolve(auth.user)
      }, (err) => {
        reject(err)
      })
    })
  }, [])

  const logout = () => {
    setUser(null)
    setAuthenticated(false)
  }

  return { user, authenticated, authenticate, logout }
}
