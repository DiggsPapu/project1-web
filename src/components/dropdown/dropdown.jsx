import React, { useState } from 'react'
import PropTypes from 'prop-types'
import style from './dropdown.module.css'

function dropdown({
  title, subtitle, values, extra,
}) {
  const [visible, setVisible] = useState(false)
  return (
    <li className={style.container}>
      <button
        type="button"
        onClick={() => setVisible(!visible)}
      >
        <h1 style={{ color: 'white' }}>{title}</h1>
        {
            visible
              ? (
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve" stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g>
                      {' '}
                      <path d="M50,27.5c0,0.8-0.7,1.5-1.5,1.5h-45C2.7,29,2,28.3,2,27.5v-3C2,23.7,2.7,23,3.5,23h45 c0.8,0,1.5,0.7,1.5,1.5V27.5z" />
                      {' '}
                    </g>
                    {' '}
                  </g>
                </svg>
              )
              : (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"><path fillRule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z" /></svg>
              )
        }
      </button>
      {
            visible
              ? (
                <div className={style.list}>
                  <h3>{subtitle}</h3>
                  <ul>
                    {values.map((element) => <li>{element}</li>)}
                  </ul>
                  <p>{extra}</p>
                </div>
              )
              : <div />
        }
    </li>
  )
}
dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string),
  extra: PropTypes.string,
}
export default dropdown
