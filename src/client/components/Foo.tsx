import React from 'react'
import { useGetInitialProps } from '../hooks/useGetInitialProps'
import { fetchData } from '../../modules/fetchData'

const Foo: React.FC = () => {
  useGetInitialProps(fetchData)

  return <div>Foo!</div>
}

export default Foo
