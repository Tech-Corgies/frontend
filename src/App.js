import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import './index.css';

function App() {
  const Title = styled.h1`
  text-align: center;
  font-size: 90px;
  line-height: 0px;
  // color: mediumseagreen;
  `;
  const Subtitle = styled.h1`
  font-size: 50px;
  line-height: 5px;
  text-align: center;
  position: relative; 
  bottom: 55px;
  // color: mediumseagreen;
  `;
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
    <Wrapper>
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
      <Title>
        <img className = "e" src = 'https://www.shareicon.net/data/512x512/2015/10/16/657287_logo_512x512.png' />
        nviro:
      </Title>
      <Subtitle>
        Conveniently Carbon Free
      </Subtitle>
      <Bar>
      <Button>
      <a href = "./Signup.js">Sign Up</a>
      </Button>
      <Button>
        <a href = "./Login.js">Log In</a>
      </Button>
      </Bar>
      <Bar>
        <Button style={{width: "15vw"}}>
          <a href = "Camera.js">Try Me</a>
        </Button>
      </Bar>
    </Wrapper>
  </div>
  );
}

export default App;
