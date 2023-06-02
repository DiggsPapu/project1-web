import React from 'react'
import PropTypes from 'prop-types'
import style from './grid.module.css'

export default function grid({ data }) {
  return (
    <div className={style.gridContainer} style={{ gridTemplateRows: `repeat(${data.length / 3},24.1618107%)` }}>
      {
            data.map((element) => (
              <img src={element} alt="ImageElement" />
            ))
        }
    </div>
  )
}
grid.propTypes = { data: PropTypes.arrayOf(PropTypes.string).isRequired }
