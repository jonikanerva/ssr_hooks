import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { AppState, AppProvider } from './AppContext'
import Foo from './Foo'
import Bar from './Bar'

const App: React.FC<AppState> = initialState => (
  <AppProvider initialState={initialState}>
    <div className="navigation">
      <NavLink to="/foo">foo</NavLink>
      <NavLink to="/bar">bar</NavLink>
    </div>
    <Switch>
      <Route path="/foo" component={Foo} />
      <Route path="/bar" component={Bar} />
    </Switch>
  </AppProvider>
)

export default App
