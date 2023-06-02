import React from 'react'
import PropTypes from 'prop-types'
import style from './button.module.css'

export default function buttonTransparent({ text }) {
  return (
    <button
      type="button"
      className={style.transparentButton}
    >
      {text}
    </button>
  )
}
buttonTransparent.propTypes = {
  text: PropTypes.string.isRequired,
}
