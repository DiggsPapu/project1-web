import React from 'react'
import PropTypes from 'prop-types'
import style from './button.module.css'

export default function buttonDropDown() {
  const value = 'English'
  return (
    <div className={style.buttonDropdown}>
      <select name="languages" id={value}>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
      </select>
    </div>
  )
}
buttonDropDown.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
}
