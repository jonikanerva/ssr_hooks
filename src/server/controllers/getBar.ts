import { NextFunction, Request, Response } from 'express'
import { rootTemplate } from '../templates/root'
import { fetchData } from '../../modules/fetchData'

export const getBar = (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> =>
  fetchData()
    .then(response =>
      rootTemplate({ url: req.url, data: { bar: response, foo: {} } })
    )
    .then(html => {
      res.send(html)
    })
    .catch(next)
