import React, { Suspense } from 'react';
import './App.scss';
import Test from 'screens/test/test.screen';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from 'common_components/hoc/main.hoc';
import store from 'store/store';
import { Provider } from 'react-redux';
import ChatScreen from 'screens/chat/chat.screen';
import Login from 'screens/login/login.screen';
import Conversation from 'screens/chat_screen/chat.screen';

const token = localStorage.getItem("token");

const NavRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Main>
        <Component {...props} />
      </Main>
    )}
  />
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div />}>
          { token
          ? <Switch>
              <NavRoute exact path="/" component={Test} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/chat" component={ChatScreen} />
              <Route exact path="/conversation" component={Conversation} />
            </Switch>
          : <Redirect to="/login" />}
          <Route exact path="/login" component={Login} />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
