// ============================================================================
// Example  React Component - Modeled after PiButton
// Extends PiSdkComponent for Pi Network flows and UI.
// ============================================================================
import React from 'react';
import PiSdkBase from "./pi_network_base";
import PiSdkComponent from "./PiSdkComponent";

export default class  extends PiSdkComponent {
  constructor(props) {
    super(props);
    this.state = {
      connected: this.is_connected_to_pi()
    };
  }

  componentDidMount() {
    super.componentDidMount();
  }

  onConnection() {
    this.setState({ connected: this.is_connected_to_pi() });
  }

  buy() {
    PiSdkBase.log("Buy Initiated");
    // Demo purposes, random order id
    const demoOrderId = Math.floor(10000 + Math.random() * 90000);
    const paymentData = {
      amount: 0.01,
      memo: "ConnecTo-Pi Admission",
      metadata: {
        description: "ConnecTo Admission",
        order_id: demoOrderId
      }
    };
    this.createPayment(paymentData);
  }

  render() {
    return (
      <button
        disabled={!this.state.connected}
        onClick={() => this.buy()}
      >Buy</button>
    );
  }
}
