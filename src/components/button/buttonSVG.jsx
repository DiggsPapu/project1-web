import React from 'react'
import PropTypes from 'prop-types'
import style from './button.module.css'

export default function buttonSVG({ path, color, click }) {
  return (
    <button className={style.buttonSVG} type="button" onClick={click}>
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
  click: PropTypes.func.isRequired,
}
