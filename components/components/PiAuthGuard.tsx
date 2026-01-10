"use client"

import { usePiConnection } from "../hooks/usePiConnection"

export function PiAuthGuard({ children }: { children: React.ReactNode }) {
  const { connected, ready } = usePiConnection()

  if (!ready) return <p>Loading Pi SDK...</p>
  if (!connected) return <p>Please authenticate with Pi</p>

  return <>{children}</>
}
