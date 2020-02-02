
import React from 'react';
import { Route, Switch } from 'react-router';
import Landing from './pages/landing/Landing';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Team from './pages/team/Team';
import UseEnviro from './pages/useenviro/UseEnviro';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/useenviro" component={UseEnviro} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}
export default connect(null, { fetchProfile })(App);