import React from 'react'
import Picture from '../../assets/lionking.png'
import styles from './section5.module.css'

export default function section5() {
  return (
    <div className={styles.container}>
      <img src={Picture} alt="The lion King" />
      <div className={styles.textContainer}>
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
