import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const publishableKey =
    "pk_test_51HUVIiF3fFGf91OSGHFrPchxmJJ8wXdPPFWHzsbMmQWw1G63iHgdf8r2IcRX6lw247RIzIkTdeuw0NQe9OekhviC00yRnya0jB";
  const stripePrice = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Trends Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
