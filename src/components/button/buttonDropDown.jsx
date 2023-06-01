import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

export default function buttonDropDown() {
  const value = 'English'
  return (
    <div className="dropdown">
      <select name="languages" id={value}>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
      </select>
    </div>
    // <button className="svg-button" type="button" onClick={click}>
    //   <span style={{ width: 'fit-content', height: 'fit-content' }}>
    //     <svg role="img" style={{ width: '50px', height: '50px' }}>
    //       <path d={path} style={{ fill: color }} />
    //     </svg>
    //   </span>
    // </button>
  )
}
buttonDropDown.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
}
