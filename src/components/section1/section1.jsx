import React from 'react'
import './section1.css'
import Button from '../button/button'
import DisneyLogo from '../../assets/disney-logo-2.png'

export default function Section1() {
  return (
    <div className="container">
      <div className="mini-container">
        <img src={DisneyLogo} alt="disney-logo" />
        <p className="janna-font" style={{ width: '100%', fontSize: '200%', color: 'white' }}>Enjoy the greatest stories, all in one place</p>
        <div style={{ height: 'max-width', width: '100%' }}>
          <Button text="GET COMBO+ OFFER" backgroundColor="rgba(100,33,255,255)" borderColor="white" fontColor="white" />
        </div>
        <p><span className="avenir-next-regular-font" style={{ color: 'white' }}>Sign up only to Disney+</span></p>
      </div>
    </div>
  )
}
