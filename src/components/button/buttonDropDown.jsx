import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './button.css'

export default function buttonDropDown() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="dropdown">
      <button type="button" className="dropdown-toggle" onClick={toggleDropdown}>
        Dropdown Button
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
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
