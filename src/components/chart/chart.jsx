import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './chart.module.css'
import Button from '../button/button'

export default function chart({ header, data, extraMessage }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr className={styles.tableHeader}>
            {windowWidth > 768 && windowWidth !== 768 && <th aria-label="Empty" className={styles.ghost} />}
            {header.map((row, index) => (
              <th className={index !== 0 ? styles.head1 : styles.head2}>
                <div className={styles.headerContainer}>
                  <p>{row[0]}</p>
                  <div className={styles.imageContainer}>
                    <img src={row[1]} alt="header_img" style={{ width: '100%', height: 'fit-content' }} />
                  </div>
                  <div style={{
                    width: '56.783%', height: '7vh', marginBottom: '5%',
                  }}
                  >
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
          {windowWidth > 768 && windowWidth !== 768
            ? data.map((row, index) => (
              <tr>
                {row.map((element, index1) => (
                  <td className={styles.row} style={index === 0 ? { height: '10.342%', borderTop: '1px solid #b4b4b8', color: '#a3a3a5' } : { color: '#a3a3a5' }}>
                    {element.map((text, index2) => (
                      <div className={styles.element}>
                        {
                        text === 'check' || text === '-'
                          ? (
                            <div className={styles.icon}>
                              {
                              text === 'check'
                                ? (
                                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                      {' '}
                                      <g id="Interface / Check_Big">
                                        {' '}
                                        <path id="Vector" d="M4 12L8.94975 16.9497L19.5572 6.34326" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        {' '}
                                      </g>
                                    </g>
                                  </svg>
                                )
                                : (
                                  <svg fill="#3c3e47" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve">
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
                            }
                            </div>
                          )
                          : (
                            <p
                              style={index2 === 0 && index === 0 && index1 === 1 ? { textDecoration: 'underline', textAlign: 'center', color: 'white' } : {}}
                            >
                              {text}
                            </p>
                          )
                      }
                      </div>

                    ))}
                  </td>
                ))}
              </tr>
            ))
            : data.map((row, index) => (
              <>
                <tr className={styles.rowTitle}>
                  <p>{row[0]}</p>
                </tr>
                <tr>
                  <td className={styles.subcolumn1}>
                    {
                    row[1].map((text, index1) => (
                      text === 'check' || text === '-'
                        ? (
                          <div className={styles.icon}>
                            {text === 'check'
                              ? (
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                  <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <g id="Interface / Check_Big">
                                      {' '}
                                      <path id="Vector" d="M4 12L8.94975 16.9497L19.5572 6.34326" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                      {' '}
                                    </g>
                                  </g>
                                </svg>
                              )
                              : (
                                <svg fill="#3c3e47" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve">
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
                              )}
                          </div>
                        )
                        : <p>{text}</p>
                    ))
                  }
                  </td>
                  <td className={styles.subcolumn2}>
                    {
                    row[2].map((text, index1) => (
                      text === 'check' || text === '-'
                        ? (
                          <div className={styles.icon}>
                            {text === 'check'
                              ? (
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                  <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <g id="Interface / Check_Big">
                                      {' '}
                                      <path id="Vector" d="M4 12L8.94975 16.9497L19.5572 6.34326" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                      {' '}
                                    </g>
                                  </g>
                                </svg>
                              )
                              : (
                                <svg fill="#3c3e47" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve">
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
                              )}
                          </div>
                        )
                        : <p style={{}}>{text}</p>
                    ))
                  }
                  </td>
                </tr>

              </>
            ))}
        </tbody>
      </table>
      {extraMessage.map((element) => (<p className="avenir-next-italic-font" style={{ color: '#a3a3a5', fontSize: '60%', textAlign: 'center' }}>{element}</p>))}
    </div>
  )
}
chart.propTypes = {
  header: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))).isRequired,
  extraMessage: PropTypes.arrayOf(PropTypes.string).isRequired,
}
