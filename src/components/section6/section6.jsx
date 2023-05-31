import React from 'react'
import Devices from '../gridevice/gridevice'
import './section6.css'

export default function section6() {
  return (
    <div className="container-6">
      <h2>Available on your favorite devices</h2>
      <Devices data={[['/src/assets/computer.png', 'Computer', ['Chrome OS', 'MacOS', 'Windows PC']],
        ['/src/assets/tv.png', 'TV', ['Amazon Fire TV', 'Android TV', 'Apple TV', 'Chromecast', 'LG TV\'s', 'Roku', 'Samsung']],
        ['/src/assets/videogames.png', 'Game Consoles', ['PS4', 'PS5', 'Xbox One', 'Xbox Series S']],
        ['/src/assets/tablet.png', 'Mobile & Tablet', ['Amazon Fire Tablets', 'Android Phones & Tablets', 'iPhone & iPad']],
      ]}
      />
    </div>
  )
}
