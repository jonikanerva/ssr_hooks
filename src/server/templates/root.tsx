import * as React from 'react'
import { renderToString } from 'react-dom/server'
import App, { Props } from '../../client/components/App'

export const rootTemplate = (initialData: Props): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>test</title>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="root">${renderToString(<App {...initialData} />)}</div>
    <script id="initialData" type="application/json">
      ${JSON.stringify(initialData)}
    </script>
    <script src="/bundle.js"></script>
  </body>
  </html>
`
