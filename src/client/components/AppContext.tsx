import * as React from 'react'
import { useState, useContext, createContext } from 'react'

export interface AppState {
  state: {
    [key: string]: any
  }
  url: string
}

type ReactUseStateParams = [
  AppState,
  React.Dispatch<React.SetStateAction<AppState>>
]

interface AppProviderProps {
  initialState: AppState
  children: React.ReactNode
}

export const initialAppState: AppState = { state: {}, url: '/' }

const defaultContextValue: ReactUseStateParams = [initialAppState, () => {}]
const AppContext = createContext(defaultContextValue)

const useAppContext = (): ReactUseStateParams => {
  const [appState, setAppState] = useContext(AppContext)

  return [appState, setAppState]
}

const AppProvider: React.FC<AppProviderProps> = ({
  children,
  initialState
}) => {
  const [state, setState] = useState(initialState)

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, useAppContext }
