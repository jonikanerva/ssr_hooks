import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import { InitialData } from '../server/templates/root'

const dataElement = document.getElementById('initialData') as Element
const initialData = JSON.parse(dataElement.innerHTML) as InitialData

hydrate(
  <Router>
    <App {...initialData} />
  </Router>,
  document.querySelector('#root')
)
