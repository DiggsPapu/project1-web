import React from 'react'
import Devices from '../gridevice/gridevice'
import './section6.css'
import Computer from '../../assets/computer.png'
import tv from '../../assets/tv.png'
import videogames from '../../assets/videogames.png'
import tablet from '../../assets/tablet.png'

export default function section6() {
  return (
    <div className="container-6">
      <h2>Available on your favorite devices</h2>
      <Devices data={[[Computer, 'Computer', ['Chrome OS', 'MacOS', 'Windows PC']],
        [tv, 'TV', ['Amazon Fire TV', 'Android TV', 'Apple TV', 'Chromecast', 'LG TV\'s', 'Roku', 'Samsung']],
        [videogames, 'Game Consoles', ['PS4', 'PS5', 'Xbox One', 'Xbox Series S']],
        [tablet, 'Mobile & Tablet', ['Amazon Fire Tablets', 'Android Phones & Tablets', 'iPhone & iPad']],
      ]}
      />
    </div>
  )
}
