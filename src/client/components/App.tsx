import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { InitialData } from '../../server/templates/root'
import Foo from './Foo'
import Bar from './Bar'

const App: React.FC<InitialData> = props => {
  console.log('app props', props)

  return (
    <React.Fragment>
      <div className="navigation">
        <NavLink to="/foo">foo</NavLink>
        <NavLink to="/bar">bar</NavLink>
      </div>
      <Switch>
        <Route
          path="/foo"
          component={(routeProps: any) => (
            <Foo url={props.url} {...routeProps} />
          )}
        />
        <Route
          path="/bar"
          component={(routeProps: any) => (
            <Bar url={props.url} {...routeProps} />
          )}
        />
      </Switch>
    </React.Fragment>
  )
}
export default App
