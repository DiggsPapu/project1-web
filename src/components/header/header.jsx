import React from 'react'
import Login from '../button/loginButton'
import Button from '../button/button'
import DisneyLogo from '../../assets/disney-logo-2.png'
import './header.css'

export default function Header() {
  return (
    <div className="header">
      <img src={DisneyLogo} alt="Disney Logo" style={{ marginLeft: '3%', height: '100%' }} />
      <div style={{ width: '74vw' }} />
      <a
        href="https://www.disneyplus.com/sign-up?type=standard"
        style={{ width: '10%', marginTop: '1%', marginBottom: '1%' }}
      >
        <Button text="SIGN UP NOW" backgroundColor="#0063e5" borderColor="white" fontColor="white" />

      </a>
      <a
        href="https://www.disneyplus.com/sign-up?type=standard"
        style={{
          marginRight: '3%', marginTop: '1%', marginBottom: '1%', width: '6vw',
        }}
      >
        <Login text="LOG IN" />
      </a>
    </div>
  )
}
