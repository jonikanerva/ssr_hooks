import { NextFunction, Request, Response } from 'express'
import { rootTemplate } from '../templates/root'
import { fetchData } from '../../modules/fetchData'

export const getRoot = (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> =>
  fetchData()
    .then(data => rootTemplate(data))
    .then(html => {
      res.send(html)
    })
    .catch(next)
