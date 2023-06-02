import React from 'react'
import Transparent from '../button/buttonTransparent'
import DropDown from '../button/buttonDropDown'
import './footer.css'
import Logo from '../../assets/disney-logo-2.png'

export default function footer() {
  return (
    <div className="footer">
      <img src={Logo} alt="Logo" />
      <div style={{
        display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center',
      }}
      >
        <a href="https://disneytermsofuse.com/english/">
          <DropDown />
        </a>
        <a href="https://disneytermsofuse.com/english/">
          <Transparent text="Terms of use" />
        </a>
        <a href="https://disneytermsofuse.com/english/">
          <Transparent text="Privacy Policy" />
        </a>
        <a href="https://disneytermsofuse.com/english/">
          <Transparent text="Interest-Based Ads" />
        </a>
        <a href="https://disneytermsofuse.com/english/">
          <Transparent text="Supported Devices" />
        </a>
        <a href="https://disneytermsofuse.com/english/">
          <Transparent text="Help" />
        </a>
        <a href="https://disneytermsofuse.com/english/">
          <Transparent text="About Us" />
        </a>
      </div>
      <p>
        © 2023 Disney and its family of affiliated companies. All rights reserved.
        <br />
        <br />
        Disney+ is a paid subscription service, its content is subject to availability.
        The Disney+ service is marketed by Disney DTC LATAM, Inc.,
        2400 W Alameda Ave., Burbank CA 91521 and Tax ID 75-3016153.
      </p>
    </div>
  )
}
