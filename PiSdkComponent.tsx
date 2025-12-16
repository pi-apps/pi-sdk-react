// ============================================================================
// PiSdkComponent.tsx - Reusable Pi Sdk base React component
// For host app developers: use as a compositional base for advanced or custom
// Pi Sdk-enabled React UIs. Extends PiSdkBase and provides basic auth
// and connection-to-Pi logic. Add your additional UI, props, methods as needed.
// Consider extending or wrapping for advanced payment behaviors or multi-step UIs.
// ============================================================================
import React from 'react';
import PiSdkBase from "pi-sdk-js";
import PiUser from "pi-sdk-js";

interface PiSdkComponentProps {
  // Add any props you use, empty for now
}

interface PiSdkComponentState {
  connected: boolean;
  user: PiUser | null;
}

export default class PiSdkComponent<P = {}, S = {}> extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    // Defensive mixin binding for underlying SDK logic
    Object.getOwnPropertyNames(PiSdkBase.prototype).forEach(name => {
      if (name !== 'constructor') {
        (this as any)[name] = (PiSdkBase.prototype as any)[name].bind(this);
      }
    });
    (this as any).initializePiSdkBase(); // Corrected to new name
  }
  componentDidMount(): void {
    // Connect to Pi Browser/session on mount
    (this as any).connect();
  }
  // Utility: can be used in your custom render to check connection
  is_connected_to_pi(): boolean {
    return PiSdkBase.connected;
  }
}

// Make all PiSdkBase methods available to extending classes
Object.assign(PiSdkComponent.prototype, PiSdkBase.prototype);
