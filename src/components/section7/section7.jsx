import React from 'react'
import Dropdown from '../dropdown/dropdown'
import './section7.css'

export default function section7() {
  return (
    <div className="section7">
      <h2>Frequently Asked Questions</h2>
      <ul>
        <Dropdown
          title="What is Disney+?"
          subtitle="With Disney+, you get:"
          values={['Exclusive entertainment experience', 'The greatest stories of Disney, Pixar, Marvel, Star Wars, and National Geographic, all in one place.', 'GroupWatch, a way to watch Disney+ together, even when you\'re apart.', 'Unlimited downloads on up to 10 devices.', 'Over 300 titles in 4K UHD and HDR.', 'Up to 4 current streams.', 'IMAX Enhanced. Available with certain Marvel titles and accessible on all devices where Disney+ is supported.']}
        />
        <Dropdown
          title="Do you already have a Disney+ or Star+ subscription but want Combo+?"
          subtitle="With Combo+:"
          values={['We will discount the value of your existing subscription to the Combo+ deal. (Yes, for the annual plan as well!)', 'If you have a monthly subscription, your monthly bill will be reduced to the Combo+ price.', 'If you have an annual subscription, we will divide your annual price into 12 equal parts and discount the monthly price to the Combo+ monthly payment.', 'A detailed email with all of the payment charges and deductions will be sent to your inbox as soon as you confirm your Combo+ payment method.', 'Remember you can cancel at any moment.']}
          extra="The Combo+ subscription is only offering a monthly plan at this moment."
        />
        <Dropdown
          title="What payment methods can I use?"
          values={[]}
          extra="You can pay with a credit card, debit card or PayPal."
        />
        <Dropdown
          title="How can I stream the new 16+ and 18+ content"
          values={[]}
          extra="Disney+ subscribers in Latin America will need to update the parental controls on their profile in order to access to the full catalog that includes 16+ and 18+ content. Users are able to restrict content in each profile as well as add a lock PIN. If you are a subscriber and you prefer to keep your current parental settings, you will enjoy all Disney+ content in a 14+ environment, and you will have the option to modify parental controls in the “edit profile” section any time."
        />
      </ul>
    </div>
  )
}
