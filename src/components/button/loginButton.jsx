import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

export default function loginButton({ text }) {
  return (
    <button
      type="button"
      className="login-button"
      // style={{backgroundColor: 'black'}}
    >
      {text}
    </button>
  )
}
loginButton.propTypes = {
  text: PropTypes.string.isRequired,
}
