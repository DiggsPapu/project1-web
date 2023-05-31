import React from 'react'
import PropTypes from 'prop-types'
import './gridevice.css'

export default function gridevice({ data }) {
  return (
    <div className="container-grid">
      {
                data.map((column) => (
                  <div className="container-column">
                    <img src={column[0]} alt="Device" />
                    <h2>{column[1]}</h2>
                    <div className="data-section">
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
