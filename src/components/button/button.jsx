import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

export default function Button({
  text, backgroundColor, fontColor,
}) {
  return (
    <button
      type="button"
      className="normal-button"
      style={{
        backgroundColor: `${backgroundColor}`,
        border: '1px solid transparent',
        color: fontColor,
        fontSize: '100%',
      }}
    >
      {text}
    </button>
  )
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
}
