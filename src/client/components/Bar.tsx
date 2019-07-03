import React from 'react'
import * as R from 'ramda'
import { useGetInitialProps } from '../hooks/useGetInitialProps'
import { fetchData } from '../../modules/fetchData'
import { useAppContext } from './AppContext'

const Bar: React.FC = () => {
  const [state, setState] = useAppContext()

  useGetInitialProps(() =>
    fetchData().then(response =>
      setState(previousState =>
        R.assocPath(['data', 'bar'], response, previousState)
      )
    )
  )

  return <div>Bar! {state.data.bar.name}</div>
}

export default Bar
