import React, { useEffect } from 'react'

const Bar: React.FC<any> = props => {
  const location = props.location.pathname
  const url = props.url

  useEffect(() => {
    if (location !== url) {
      console.log('haetaan bar')
    }
  }, [])

  return <div>Bar!</div>
}

export default Bar
