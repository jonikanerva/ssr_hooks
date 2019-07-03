import React from 'react'
import { useGetInitialProps } from '../hooks/useGetInitialProps'
import { fetchData } from '../../modules/fetchData'

const Bar: React.FC = () => {
  useGetInitialProps(fetchData)

  return <div>Bar!</div>
}

export default Bar
