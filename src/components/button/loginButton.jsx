import React from 'react'
import PropTypes from 'prop-types'
import style from './button.module.css'

export default function loginButton({ text }) {
  return (
    <button
      type="button"
      className={style.loginButton}
    >
      {text}
    </button>
  )
}
loginButton.propTypes = {
  text: PropTypes.string.isRequired,
}
