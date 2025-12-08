// ============================================================================
// Example PiButton React Component
//
// For host app developers: This is a ready-to-use or extendable Pi SDK
// integration component. It composes with PiSdkBase for Pi SDK connection
// and payment flows. Recommended as a starting entry in your React app.
// Modify to add new UI, callbacks, props, etc, as you require.
// Place <div id="pibutton"></div> in your HTML and mount in index.jsx.
// ============================================================================
import React from 'react';
import PiSdkComponent from "./PiSdkComponent"

export default class PiButton extends PiSdkComponent {
  constructor(props) {
    super(props);
    this.state = {
      connected: this.is_connected_to_pi()
    };
  }

  componentDidMount() {
    // PiSdkComponent will attempt to connect to Pi servers
    // once the component is mounted
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
      amount: 0.01,                   /* Pi Amount being transacted */
      memo: "ConnecTo-Pi Admission",  /* Arbitrary payment memo */
      metadata: {
	/* Arbitrary metadata */
	description: "ConnecTo Admission",
        /* order_id should match your PiTransaction field name */
        order_id: demoOrderId }
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
