import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

export default function buttonTransparent({ text }) {
  return (
    <button
      type="button"
      className="transparent-button"
    >
      {text}
    </button>
  )
}
buttonTransparent.propTypes = {
  text: PropTypes.string.isRequired,
}
