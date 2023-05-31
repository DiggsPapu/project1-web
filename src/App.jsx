import React, { useRef } from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
import Section3 from './components/section3/section3'
import Section4 from './components/section4/section4'
import Section5 from './components/section5/section5'
import Section6 from './components/section6/section6'
import Header from './components/header/header'

function App() {
  const ref = useRef(null)

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <div
        style={{
          marginTop: '5%',
        }}
      >
        <Section1 handleclick={handleClick} />
      </div>
      <div ref={ref}>
        <Section2 />
      </div>
      <div>
        <Section3 />
      </div>
      <div>
        <Section4 />
      </div>
      <div>
        <Section5 />
      </div>
      <div>
        <Section6 />
      </div>
      <header
        style={{
          width: '100%',
          height: '1.1077106%',
          position: 'fixed',
          top: '0px',
          left: '0px',
          marginTop: '0.01%',
        }}
      >
        <Header />
      </header>
    </>
  )
}

export default App
