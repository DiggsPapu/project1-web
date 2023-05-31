import React from 'react'
import Picture from '@assets/lionking.png'
import './section5.css'

export default function section5() {
  return (
    <div className="container-5">
      <img src={Picture} alt="The lion King" />
      <div className="text-container">
        <h2>
          Download any series or movie
        </h2>
        <p>
          {'Download whatever you want and watch whenever you want. Your favorites will always stay with you, even if your Wi-Fi won\'t.'}
        </p>
      </div>
    </div>
  )
}
