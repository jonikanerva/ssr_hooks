import React from 'react'
import { hydrate } from 'react-dom'

import App, { Props } from './components/App'

const dataElement = document.getElementById('initialData') as Element
const initialData = JSON.parse(dataElement.innerHTML) as Props

hydrate(<App {...initialData} />, document.querySelector('#root'))
