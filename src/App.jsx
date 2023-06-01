import React, { useRef } from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
import Section3 from './components/section3/section3'
import Section4 from './components/section4/section4'
import Section5 from './components/section5/section5'
import Section6 from './components/section6/section6'
import Section7 from './components/section7/section7'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import './App.css'

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
      <div>
        <Section7 />
      </div>
      <header
        style={{
          width: '100%',
          height: '10%',
          position: 'fixed',
          top: '0px',
          left: '0px',
          marginTop: '0.01%',
        }}
      >
        <Header />
      </header>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
