import { useEffect } from 'react'

export const useGetInitialProps = (getProps: () => Promise<any>) => {
  useEffect(() => {
    const current = window.location.pathname
    const dataElement = document.getElementById('initialData') as Element
    const serverUrl = JSON.parse(dataElement.innerHTML).url

    if (current !== serverUrl) {
      getProps()
    }
  }, [])
}
