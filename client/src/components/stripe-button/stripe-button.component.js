import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HiLpoAcB7riFXyD1rx9EajiOZDw4iMhS7EvI5N7qdYrM6uO8mauA1SuHa05oHsvWIs0hkt55vznM9eGUo60bGIE002qSMrvjX';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    }).then(response => {
      console.log('Payment success: ', response);
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please make sure you use the provided credit card.');
    });
  };

  return (
    <StripeCheckout
      name='CRWN Clothing Ltd.'
      label='Pay Now'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
