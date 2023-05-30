import React from 'react'
import PropTypes from 'prop-types'
import './chart.css'
import Button from '../button/button'

export default function chart({ header, data, extraMessage }) {
  return (
    <div className="table-container">
      <table style={{ borderSpacing: '0' }}>
        <thead>
          <tr className="table-header">
            <th aria-label="Empty" style={{ width: '32.999%' }} />
            {header.map((row, index) => (
              <th style={{
                width: '33.501%', borderTop: '1px solid #383a43',
              }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <p className="avenir-next-regular-font" style={{ color: 'white', fontWeight: 'normal' }}>{row[0]}</p>
                  <img src={row[1]} alt="header_img" />
                  <div style={{ width: '56.783%', height: '23.319%' }}>
                    <a href={row[3]} aria-label="link">
                      <Button
                        text={row[2]}
                        backgroundColor={index % 2 === 0
                          ? '#0063e5'
                          : 'rgba(100,33,255,255)'}
                        borderColor="white"
                        fontColor="white"
                      />
                    </a>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr>
              {row.map((element, index1) => (
                <td className="row" style={index === 0 ? { height: '10.342%', borderTop: '1px solid #b4b4b8', color: '#a3a3a5' } : { color: '#a3a3a5' }}>
                  {element.map((text, index2) => (
                    <p
                      style={index2 === 0 && index === 0 && index1 === 1 ? { textDecoration: 'underline' } : {}}
                    >
                      {text}
                    </p>
                  ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {extraMessage.map((element) => (<p className="avenir-next-italic-font" style={{ color: '#a3a3a5', fontSize: '60%', textAlign: 'left' }}>{element}</p>))}
    </div>
  )
}
chart.propTypes = {
  header: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))).isRequired,
  extraMessage: PropTypes.arrayOf(PropTypes.string).isRequired,
}
