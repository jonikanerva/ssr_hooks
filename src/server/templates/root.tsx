import * as React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../../client/components/App'

export const rootTemplate = (): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>test</title>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="root">${renderToString(<App />)}</div>
    <script src="/bundle.js"></script>
  </body>
  </html>
`
