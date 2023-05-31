import React from 'react'
import PropTypes from 'prop-types'
import './grid.css'

export default function grid({ data }) {
  return (
    <div style={{ gridTemplateColumns: 'repeat(3, 32.126171%)', gridTemplateRows: `repeat(${data.length / 3},24.1618107%)` }}>
      {
            data.map((element) => (
              <img src={element} alt="ImageElement" style={{ width: '32.126171%', paddingLeft: '1.203829%', paddingBottom: '1.203829%' }} />
            ))
        }
    </div>
  )
}
grid.propTypes = { data: PropTypes.arrayOf(PropTypes.string).isRequired }
