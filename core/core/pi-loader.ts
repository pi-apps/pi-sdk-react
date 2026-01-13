export function isPiReady(): boolean {
  return typeof window !== "undefined" && !!window.Pi
}

export function assertPiReady() {
  if (!isPiReady()) {
    throw new Error("Pi SDK not loaded. Ensure <script src='https://sdk.minepi.com/pi-sdk.js' />")
  }
}
