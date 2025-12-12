# pi-sdk-react

`pi-sdk-react` is a React component library designed for seamless Pi Network payments and authentication in any React application. Built atop `pi-sdk-js` (a protocol logic package), it gives developers drop-in buttons, composable components, and full payment flow logic—no server code required for basic usage.

## Purpose
- Provides ready-to-use React components—like `<PiButton />`—for instant Pi payment integration.
- Encapsulates the Pi protocol/auth/payment logic using `pi-sdk-js`, so React devs can focus on UI.
- No backend/server work necessary for the core user experience (connection and buy/payment button).
- Easily extensible by subclassing or composing SDK-supplied components.
- Handles all side effects (connecting/authenticating with the Pi Browser) inside the component.

## Getting Started

### 1. Install
```
npm install pi-sdk-react
# or
yarn add pi-sdk-react
```

### 2. Drop in a Buy Button
```jsx
import React from "react";
import PiButton from "pi-sdk-react/PiButton";

function App() {
  return (
    <div>
      <h1>Pi Payment Demo</h1>
      <PiButton />
    </div>
  );
}
```
- `<PiButton />` is disabled until authenticated; on login, it enables and runs the full payment flow when clicked.

### 3. Custom Experience: Extend PiSdkComponent
For more advanced usage, subclass or extend the SDK's base component:
```jsx
import React from "react";
import PiSdkComponent from "pi-sdk-react/PiSdkComponent";

class MyCustomBuyButton extends PiSdkComponent {
  render() {
    return (
      <button disabled={!this.state.connected} onClick={() => this.buy()}>
        Buy with Pi
      </button>
    );
  }
}
```
You can also override methods like `onConnection()` or `onApproveSuccess()` for handling each payment or auth step.

## Core Usage API for React Devs

| Component or Method         | Purpose                                                  |
|----------------------------|----------------------------------------------------------|
| `<PiButton />`             | Working Pi buy button, tracks state, handles payment     |
| `<PiSdkComponent />`       | Extend for your own UI, but benefit from ready logic     |
| `connected` (state/prop)   | Is user authenticated? (for UI/UX)                       |
| `user` (state/prop)        | Authenticated Pi user, if available                      |
| Override methods (class)   | `onConnection`, `onApproveSuccess`, etc.                 |
| `buy()`                    | Trigger the payment flow programmatically                |

## Summary
- Zero backend needed for connecting user and launching a Pi payment flow.
- All Pi protocol details handled for you—just use the components in your React UI.
- Built for extensibility and custom UI if needed.

## License
This package is available as open source under the terms of the [PiOS License]. See `LICENSE` for details.
