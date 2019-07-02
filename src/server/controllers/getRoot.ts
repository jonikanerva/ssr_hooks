import { NextFunction, Request, Response } from 'express'

export const getRoot = (
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>test</title>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
  </body>
  </html>
  `)
}
