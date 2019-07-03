import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppState } from './components/AppContext'
import App from './components/App'

const dataElement = document.getElementById('initialData') as Element
const initialData = JSON.parse(dataElement.innerHTML) as AppState

hydrate(
  <Router>
    <App {...initialData} />
  </Router>,
  document.querySelector('#root')
)
