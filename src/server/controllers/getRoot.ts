import { NextFunction, Request, Response } from 'express'
import { rootTemplate } from '../templates/root'

export const getRoot = (
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const initialData = { name: 'sjukka' }

  res.send(rootTemplate(initialData))
}
