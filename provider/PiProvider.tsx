"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { isPiReady } from "../core/pi-loader"
import { setupMockPi } from "../mock/mockPi"

type PiContextState = {
  ready: boolean
  user: any | null
}

const PiContext = createContext<PiContextState>({
  ready: false,
  user: null
})

export function PiProvider({
  children,
  mock = false
}: {
  children: React.ReactNode
  mock?: boolean
}) {
  const [ready, setReady] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    if (mock) setupMockPi()
    if (isPiReady()) {
      setReady(true)
      window.Pi.authenticate([], (auth) => {
        setUser(auth.user)
      })
    }
  }, [mock])

  return (
    <PiContext.Provider value={{ ready, user }}>
      {children}
    </PiContext.Provider>
  )
}

export function usePiContext() {
  return useContext(PiContext)
}
