import React from 'react'
import Login from '../button/loginButton'
import Button from '../button/button'
import DisneyLogo from '../../assets/disney-logo-2.png'
import styles from './header.module.css'

export default function Header() {
  return (
    <nav className={styles.header}>
      <img src={DisneyLogo} alt="Disney Logo" />
      <a
        href="https://www.disneyplus.com/sign-up?type=standard"
        className={styles.signUp}
      >
        <Button text="SIGN UP NOW" backgroundColor="#0063e5" borderColor="white" fontColor="white" />

      </a>
      <a
        href="https://www.disneyplus.com/sign-up?type=standard"
        className={styles.logIn}
      >
        <Login text="LOG IN" />
      </a>
    </nav>
  )
}
