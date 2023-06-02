import React from 'react'
import Grid from '../grid/grid'
import styles from './section4.module.css'
import Beatles from '../../assets/beatles.jpeg'
import BobaFet from '../../assets/bobafet.jpeg'
import WhatIF from '../../assets/whatif.jpeg'
import Olaf from '../../assets/olaf.jpeg'
import Luc from '../../assets/luc.jpeg'
import Mui from '../../assets/mui.jpeg'
import Earth from '../../assets/earth.jpeg'
import HawkEye from '../../assets/hawkeye.jpeg'
import Greg from '../../assets/greg.jpeg'

export default function section4() {
  return (
    <div className={styles.container}>
      <h2>Exclusive Disney+ Originals</h2>
      <p>
        {'Watch never-before-seen movies, series, shorts and more from the world\'s greatest storytellers - only available on Disney+'}
      </p>
      <Grid data={[Beatles, BobaFet, WhatIF, Olaf, Luc, Mui, Earth, HawkEye, Greg]} />
    </div>
  )
}
