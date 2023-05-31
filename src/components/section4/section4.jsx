import React from 'react'
import Grid from '../grid/grid'
import './section4.css'

export default function section4() {
  return (
    <div className="section4">
      <h2>Exclusive Disney+ Originals</h2>
      <p>
        {'Watch never-before-seen movies, series, shorts and more from the world\'s greatest storytellers - only available on Disney+'}
      </p>
      <Grid data={['/src/assets/beatles.jpeg', '/src/assets/bobafet.jpeg', '/src/assets/whatif.jpeg', '/src/assets/olaf.jpeg', '/src/assets/luc.jpeg', '/src/assets/mui.jpeg', '/src/assets/earth.jpeg', '/src/assets/hawkeye.jpeg', '/src/assets/greg.jpeg']} />
    </div>
  )
}
