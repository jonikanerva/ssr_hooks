import uuid from 'uuid/v4'

export const fetchData = () => {
  return Promise.resolve({ name: uuid() })
}
