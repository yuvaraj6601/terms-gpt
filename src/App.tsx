import React, { Suspense } from 'react';
import './App.scss';
import Test from 'screens/test/test.screen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'common_components/hoc/main.hoc';
import store from 'store/store';
import { Provider } from 'react-redux';
import Home from 'screens/home/home.screen';
import LandingPage from 'screens/landingPage/landingPage.screen';
import TermsList from 'screens/termsList/termsList.screen';
import ViewSummary from 'screens/viewSummary/viewSummary.screen';
import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';

const token = localStorage.getItem('token');

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Routes>
            <Route
              path="/"
              element={
                <Main>
                  <LandingPage />
                </Main>
              }></Route>
            <Route
              path="/home"
              element={
                <Main>
                  <Home />
                </Main>
              }></Route>
            <Route
              path="/test"
              element={
                <Main>
                  <Test />
                </Main>
              }></Route>
            <Route
              path="/terms_list"
              element={
                <Main>
                  <TermsList />
                </Main>
              }></Route>
            <Route
              path="/view_summary"
              element={
                <Main>
                  <ViewSummary />
                </Main>
              }></Route>
          </Routes>
          <Toaster position="top-center" />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
