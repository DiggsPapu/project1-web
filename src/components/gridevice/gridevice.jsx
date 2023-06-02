import React from 'react'
import PropTypes from 'prop-types'
import styles from './gridevice.module.css'

export default function gridevice({ data }) {
  return (
    <div className={styles.container}>
      {
                data.map((column) => (
                  <div className={styles.containerColumn}>
                    <img src={column[0]} alt="Device" />
                    <h2>{column[1]}</h2>
                    <div className={styles.dataSection}>
                      {
                            column[2].map((item) => (<span>{item}</span>))
                        }
                    </div>
                  </div>
                ))
            }
    </div>
  )
}
gridevice.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
}
