import React from 'react'
import './section1.css'
import Button from '../button/button'
import DisneyLogo from '../../assets/DisneyLogo.png'

export default function Section1() {
  return (
    <div className="container">
      <div className="mini-container">
        <img src={DisneyLogo} alt="disney-logo" />
        <Button text="GET COMBO+ OFFER" backgroundColor="rgba(100,33,255,255)" borderColor="white" fontColor="white" />
      </div>
    </div>
  )
}
