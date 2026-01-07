import { useState as n, useCallback as o, useEffect as f } from "react";
import { PiSdkBase as s } from "pi-sdk-js";
function P() {
  const [e, c] = n(!1), [r, u] = n(null), [a, i] = n(!1), [t] = n(() => new s()), d = o(async () => {
    t.onConnection = () => {
      c(!0), u(s.user), i(!0);
    }, await t.connect();
  }, [t]);
  return f(() => {
    d();
  }, []), { connected: e, user: r, ready: a };
}
function m(e) {
  return o(() => {
    new s().createPayment(e);
  }, [e]);
}
export {
  P as usePiConnection,
  m as usePiPurchase
};
//# sourceMappingURL=index.js.map
