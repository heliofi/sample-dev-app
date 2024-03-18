"use client";

import { HelioCheckout } from "@heliofi/checkout-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [price, setPrice] = useState(1);
  const { push } = useRouter();

  return (
    <div className="p-10 space-y-4 bg-gray-900 h-full">
      <h1>This is how you embed the React widget</h1>
      <code>yarn add @heliofi/checkout-react</code>
      <h1>Simple example</h1>
      <HelioCheckout
        config={{
          paylinkId: "65f1ed912d926efac71bbed1", // Add your paylink id here
          onSuccess: (payment) => {
            console.log("Payment success", payment);
            push("/examples/helio-checkout-widget/react/success-page");
          },
        }}
      />
      <h1>Pay with card</h1>
      <HelioCheckout
        config={{
          paylinkId: "65f1ed912d926efac71bbed1", // Add your paylink id here
          primaryPaymentMethod: "fiat",
          onSuccess: (payment) => {
            console.log("Payment success", payment);
            push("/examples/helio-checkout-widget/react/success-page");
          },
        }}
      />
      <h1>Dynamically change the price (variable)</h1>
      <p>
        NOTE: Your paylink needs to have dynamic pricing enabled for this to
        work
      </p>
      <HelioCheckout
        config={{
          paylinkId: "65f43cd46eeaae9854101aa1", // Add your paylink id here
          amount: String(price),
          onSuccess: (payment) => {
            console.log("Payment success", payment);
            push("/examples/helio-checkout-widget/react/success-page");
          },
        }}
      />
    </div>
  );
}
