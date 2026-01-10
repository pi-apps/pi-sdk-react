import { usePiContext } from "../provider/PiProvider"

export function usePiConnection() {
  const { ready, user } = usePiContext()
  return {
    ready,
    connected: !!user,
    user
  }
}
