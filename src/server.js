import express from 'express'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import Component from './App.js'

const app = express()

app.get('/', (request, response) => {
  const html = renderToString(
    createElement(Component),
  )
  response.send(html)
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
