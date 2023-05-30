import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
import Header from './components/header/header'

function App() {
  return (
    <>
      <div
        style={{
          marginTop: '5%',
        }}
      >
        <Section1 />
      </div>
      <div>
        <Section2 />
      </div>
      <div
        style={{
          width: '100%',
          height: '90px',
          position: 'fixed',
          top: '0px',
          left: '0px',
          marginTop: '0.01%',
        }}
      >
        <Header />
      </div>
    </>
  )
}

export default App
