import React from 'react'
import './section2.module.css'

export default function section2() {
  return (
    <div className="container-1">
      <p
        className="janna-font"
        style={{
          width: '100%', fontSize: '200%', color: 'white', textAlign: 'center',
        }}
      >
        Select your plan
      </p>
      <p className="avenir-next-regular-font" style={{ color: 'grey', textAlign: 'center' }}>Cancel anytime</p>
      <p className="avenir-next-italic-font" style={{ color: 'grey', fontSize: '60%', textAlign: 'left' }}>
        * The price may vary if billed through other platforms. Third party charges may apply.
      </p>
    </div>
  )
}
