import React, { useEffect } from 'react';
import styled from 'styled-components';
import './index.css';

function App() {
    const Wrapper = styled.section`
    display:flex;
    flex-direction: column;
    padding: 0px 20px 0px 20px;
    height: 100vh;
    `;
    const NavBar = styled.section`
    align-self: flex-end;
    display: inline;
    `;
    const Bar = styled.section`
    align-self: center;
    `;
    const Button = styled.button`
    color: mediumseagreen;
    align-self: center;
    font-size: 18px;
    background: mediumseagreen;
    border-radius: 3px;
    margin: 10px;
    padding: 10px;
    border: none;
    color: white;
    max-width: 50vw;
    `;

return (
  <div>
  <Wrapper id = "title-section">
    <img className = "e" src = 'https://www.shareicon.net/data/512x512/2015/10/16/657287_logo_512x512.png' />
    <NavBar>
      <Button>
          <a href = "./App.js">Home</a>
        </Button>
        <Button>
          <a href = "./About.js">About</a>
        </Button>
        <Button>
          <a href = "./Team.js">Team</a>
        </Button>
      </NavBar> 
      
  </Wrapper>
    </div>
    );
  }
  
  export default App;
  