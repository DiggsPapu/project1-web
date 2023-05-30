import React from 'react'
import './section1.css'
import Button from '../button/button'
import SVG from '../button/buttonSVG'
import DisneyLogo from '../../assets/disney-logo-2.png'
import PPan from '../../assets/peterPan.jpeg'
import Red from '../../assets/red.jpeg'
import Chris from '../../assets/chrisHemsworth.jpeg'
import panter from '../../assets/blackPanter.jpeg'
import yoda from '../../assets/yoda.jpeg'

export default function Section1() {
  return (
    <div className="container">
      <div className="mini-container">
        <img src={DisneyLogo} alt="disney-logo" />
        <p
          className="janna-font"
          style={{
            width: '100%', fontSize: '150%', color: 'white', textAlign: 'center',
          }}
        >
          Enjoy the greatest stories, all in one place
        </p>
        <div style={{ height: 'max-width', width: '100%' }}>
          <Button text="GET COMBO+ OFFER" backgroundColor="rgba(100,33,255,255)" borderColor="white" fontColor="white" />
        </div>
        <p><a className="avenir-next-regular-font" href="https://www.disneyplus.com/billing?skuInterval=annual&toggle=shown" style={{ color: 'white', textDecoration: 'underline' }}>Sign up only to Disney+</a></p>
        <div style={{
          position: 'absolute', left: '0%', bottom: '15%', width: 'fit-content', height: 'fit-content',
        }}
        >
          <SVG color="grey" path="M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z" />
        </div>
      </div>
      <div className="mini-container-2">
        <img src={PPan} alt="Peter Pan" />
        <img src={Red} alt="Red" />
        <img src={panter} alt="Black Panter 2" />
        <img src={yoda} alt="Yoda" />
        <img src={Chris} alt="Chris Hemsworth" />
      </div>
    </div>
  )
}
