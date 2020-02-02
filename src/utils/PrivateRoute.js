import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken } from './authHelpers';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        getToken() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
