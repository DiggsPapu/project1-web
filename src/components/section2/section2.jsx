import React from 'react'
import Chart from '../chart/chart'
import DisneyLogo from '../../assets/disney-logo-2.png'
import Star from '../../assets/disney-combo-star.png'
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
      <Chart
        header={[['Disney+', DisneyLogo, 'USD 7.99/MONTH*', 'https://www.disneyplus.com/sign-up?skuInterval=monthly&toggle=shown'], ['Combo+', Star, 'USD 14.99/MONTH*', 'https://www.disneyplus.com/sign-up?type=bundle']]}
        data={[[['Annual price'], ['USD 66.99/year*', ' 12 months for the price of 9'], ['-']],
          [['Original series, classics and movies from Disney, Pixar, Marvel, Star Wars and National Geographic'], ['check'], ['check']],
          [['Live sports from the world\'s best leagues and biggest tournaments from ESPN'], ['-'], ['check']],
          [['Local productions and award-winning TV shows, movies, and series exclusively on Star+'], ['-'], ['check']],
          [['Stream up to 4 different devices at once'], ['', '4'], ['', '4+4']],
          [['Download and watch your favorites without connection or delays'], ['check'], ['check']],
          [['Create personalized profiles within your account'], ['', '7'], ['', '7+7']],
          [['Protect your family with parental controls'], ['check'], ['check']],
        ]}
        extraMessage={['* The price may vary if billed through other platforms. Third party charges may apply.']}
      />
    </div>
  )
}
