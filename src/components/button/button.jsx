import React from 'react'
import PropTypes from 'prop-types'
import style from './button.module.css'

export default function Button({
  text, backgroundColor, fontColor,
}) {
  return (
    <button
      type="button"
      className={style.normalButton}
      style={{
        backgroundColor: `${backgroundColor}`,
        border: '1px solid transparent',
        color: fontColor,
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
