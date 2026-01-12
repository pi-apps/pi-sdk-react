# Pi Network React SDK – Community Developer Guide

This package provides idiomatic React hooks and example components for building apps and integrations on the Pi Network using the browser's `window.Pi` API with TypeScript safety and React ergonomics.
It is part of the "Ten Minutes to Transactions" effort described in this
[video](https://www.youtube.com/watch?v=cIFqf1Z5pRM&t=35s).

**This package only contains the front end interface for initiating and
completing Pi transations. It does not include back end support and
will not operate without it.** Use one of the back end packages such as
[pi-sdk-nextjs](https://github.com/pi-apps/pi-sdk-nextjs) or
[pi-sdk-rails](https://github.com/pi-apps/pi-sdk-rails).


---

## 🚀 Quick Start

1. **Install pi-sdk-react and its peer dependencies**
   ```sh
   yarn add pi-sdk-react pi-sdk-js react react-dom
   # (or npm install ...)
   ```

2. **Ensure the global Pi SDK (`window.Pi`) is available**
   Add in your main app HTML (e.g., _public/index.html_ or via a script/Head component):
   ```html
   <script src="https://sdk.minepi.com/pi-sdk.js"></script>
   ```
   This is required for all Pi SDK browser integrations.

3. **Use the hooks and components in your app:**

   ```tsx
   "use client";
   import React from 'react';
   import { usePiConnection, usePiPurchase } from 'pi-sdk-react';
   import { PaymentData } from 'pi-sdk-js';

   const defaultPaymentData: PaymentData = {
     amount: 0.01,
     memo: 'Example Pi Payment',
     metadata: { productId: 42, description: 'Demo purchase via Pi Network' }
   };

   export interface PiButtonProps {
     paymentData?: PaymentData;
     onConnected?: () => void;
     children?: React.ReactNode;
   }

   export function PiButton({ paymentData = defaultPaymentData, onConnected, children }: PiButtonProps) {
     const { connected } = usePiConnection();
     const purchase = usePiPurchase(paymentData);

     React.useEffect(() => {
       if (connected && onConnected) onConnected();
     }, [connected, onConnected]);

     return (
       <button disabled={!connected} onClick={purchase}>
         {children || 'Buy with Pi'}
       </button>
     );
   }
   ```

---

## 📦 API Overview

### Hooks
- **`usePiConnection()`** — Handles Pi authentication, user connection, and exposes `{ connected, user, ready }`. Use this to enable/disable purchase buttons, or to get the current Pi user.
- **`usePiPurchase(paymentData)`** — Returns a `purchase()` callback that triggers the full Pi payment flow for the specified purchase (amount, memo, and metadata).

### Child SDK – `pi-sdk-js`
- All Pi Network protocol types (e.g., `PaymentData`, `PiUser`) come from `pi-sdk-js`.
- For low-level protocol customization (e.g., non-React environments), use `pi-sdk-js` directly.


---

## 🔑 Key Details
- **Peer dependency:** React **must** be installed by the consuming app (peerDependency).
- **Browser only:** Expects `window.Pi` to be present (via Pi Network browser SDK script tag).
- **No global bundle**: Must be imported as an ES module.
- **No extra context provider required** — hooks are self-contained and require no wrapper.
- **Colocated tests, idiomatic React patterns.**

---

## ❓ FAQ

### Where is the main Pi SDK logic?
- The low-level Pi JS SDK is provided by [pi-sdk-js](https://github.com/pi-apps/pi-sdk-js), which is a dependency. Do not use `window.Pi` directly in React—use these hooks/components for best results.

### How do I mock/disable Pi for tests or development?
- Stub or mock `window.Pi` in your test environment to return appropriate values. See [Vitest](https://vitest.dev/) or your test runner's docs.

### Can I use this with Next.js, Vite, CRA, etc?
- Yes! It is ESM-first and framework-agnostic (but expects a React 18+ or React 19 app as a peer).

---

## 📚 Further Resources
- [Official Pi SDK Docs](https://developer.minepi.com/)
- [pi-sdk-js API Reference](https://github.com/pi-apps/pi-sdk-js)

For more advanced use-cases, see the internal documentation or contact the Pi SDK team.
