import React, { Suspense } from 'react';
import './App.scss';
import Test from "screens/test/test.screen"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from 'common_components/hoc/main.hoc'
import store from 'store/store';
import { Provider } from 'react-redux'

const NavRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      <Main><Component {...props} /></Main>
    )} />
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div/>}>
          <Switch>
            <NavRoute exact path="/" component={Test} />
          </Switch>
        </Suspense>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
