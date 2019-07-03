import React from 'react'
import * as R from 'ramda'
import { useGetInitialProps } from '../hooks/useGetInitialProps'
import { fetchData } from '../../modules/fetchData'
import { useAppContext } from './AppContext'

const Foo: React.FC = () => {
  const [state, setState] = useAppContext()

  useGetInitialProps(() =>
    fetchData().then(response =>
      setState(previousState =>
        R.assocPath(['data', 'foo'], response, previousState)
      )
    )
  )

  return <div>Foo! {state.data.foo.name}</div>
}

export default Foo
