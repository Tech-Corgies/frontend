/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import logo from './logo.svg';
import useActions from './utils/useActions';
import * as a from './modules/user/userAction';

function App() {
  const [googleAuth, login, logout, register] = useActions([
    a.googleAuthorized,
    a.userLogin,
    a.userLogout,
    a.userRegister,
  ]);
  useEffect(() => {
    login({ email: 'tester1121@email.com', password: 'securePassw2ord111' });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hey</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
