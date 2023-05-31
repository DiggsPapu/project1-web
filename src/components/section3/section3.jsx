import React from 'react'
import Picture from '@assets/electro.png'
import './section3.css'

export default function section3() {
  return (
    <div className="container-3">
      <img src={Picture} alt="Electro" />
      <div>
        <h2>Watch the way you want</h2>
        <p>
          Enjoy the big screen experience on your TV,
          or watch on your tablet, laptop, phone and more.
          You can watch an ever-growing selection of titles in 4K.
          Plus, you can stream on 4 screens at once, so everyone’s happy.
        </p>
      </div>
    </div>
  )
}
