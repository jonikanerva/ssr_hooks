import React, { useEffect } from 'react'

const Foo: React.FC<any> = props => {
  const location = props.location.pathname
  const url = props.url

  useEffect(() => {
    if (location !== url) {
      console.log('haetaan foo')
    }
  }, [])

  return <div>Foo!</div>
}

export default Foo
