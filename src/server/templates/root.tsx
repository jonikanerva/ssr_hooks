import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import { AppState } from '../../client/components/AppContext'
import App from '../../client/components/App'

export const rootTemplate = (initialData: AppState): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>test</title>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="root">${renderToString(
      <Router location={initialData.url}>
        <App {...initialData} />
      </Router>
    )}</div>
    <script id="initialData" type="application/json">
      ${JSON.stringify(initialData)}
    </script>
    <script src="/bundle.js"></script>
  </body>
  </html>
`
