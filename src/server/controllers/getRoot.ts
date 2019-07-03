import { NextFunction, Request, Response } from 'express'
import { rootTemplate } from '../templates/root'
import { fetchData } from '../../modules/fetchData'

export const getRoot = (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> =>
  fetchData()
    .then(data => rootTemplate({ url: req.url, state: data }))
    .then(html => {
      res.send(html)
    })
    .catch(next)
