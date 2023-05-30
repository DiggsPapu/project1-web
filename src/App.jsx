import React from 'react'
import Section from './components/section1/section1'
import Header from './components/header/header'

function App() {
  return (
    <>
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
      <Section />
    </>
  )
}

export default App
