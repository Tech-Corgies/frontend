import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router';
import styled, { css } from 'styled-components';
import './index.css';
import Landing from './pages/landing/Landing';
import Register from './pages/register/Register';

function App(props) {
  useEffect(() => {
    const token = getToken();
    if (token) {
      props.fetchProfile();
    }
  }, []);
  return (
    <div>
      <TopBar />
      {/* <PrivateRoute path="/" component={RightSidebar} /> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Register} />
      
      </Switch>
    </div>
  );
}
export default connect(null, { fetchProfile })(App);