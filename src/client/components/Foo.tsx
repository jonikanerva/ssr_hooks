import React from 'react'
import { useGetInitialProps } from '../hooks/useGetInitialProps'
import { fetchData } from '../../modules/fetchData'
import { useAppContext } from './AppContext'

const Foo: React.FC = () => {
  const [state, setState] = useAppContext()

  useGetInitialProps(() =>
    fetchData().then(data =>
      setState(previousState => ({ ...previousState, state: data }))
    )
  )

  return <div>Foo!</div>
}

export default Foo
