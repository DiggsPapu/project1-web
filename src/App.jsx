import React from 'react'
import Button from './components/button/button'
import Login from './components/button/loginButton'
import Section from './components/section1/section1'

function App() {
  return (
    <>
      <Login text="LOG IN" />
      <Button text="NORMAL" backgroundColor="rgba(100,33,255,255)" borderColor="white" fontColor="white" />
      <Button text="NORMAL2" backgroundColor="#0063e5" borderColor="white" fontColor="white" />
      <Section />
      {/* <loginButton text="LOG IN" /> */}
    </>
  )
}

export default App
