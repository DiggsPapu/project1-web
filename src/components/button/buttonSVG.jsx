import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

export default function buttonSVG({ path, color }) {
  return (
    <button className="svg-button" type="button">
      <span style={{ width: 'fit-content', height: 'fit-content' }}>
        <svg role="img" style={{ width: '50px', height: '50px' }}>
          <path d={path} style={{ fill: color }} />
        </svg>
      </span>
    </button>
  )
}
buttonSVG.propTypes = {
  path: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
