import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Wrapper,
  NavBar,
  Button,
  Title,
  Subtitle,
  Bar,
} from './styles/landingStyles';

export default function Landing() {
  const Title = styled.h1`
  text-align: center;
  font-size: 90px;
  line-height: 0px;
  // color: mediumseagreen;
  `;
  const Subtitle = styled.h2`
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
            <NavLink to="/">Home</NavLink>
          </Button>
          <Button>
            <NavLink to="/about">About</NavLink>
          </Button>
          <Button>
            <NavLink to="/team">Team</NavLink>
          </Button>
        </NavBar>
        <Title>
          <img
            className="e"
            src="https://www.shareicon.net/data/512x512/2015/10/16/657287_logo_512x512.png"
            alt="logoimage"
          />
          nviro:
        </Title>
        <Subtitle>Conveniently Carbon Free</Subtitle>
        <Bar>
          <Button>
            <NavLink to="/register">Sign Up</NavLink>
          </Button>
          <Button>
            <NavLink to="/login">Log In</NavLink>
          </Button>
        </Bar>
        <Bar>
          <Button style={{ width: '15vw' }}>
            <NavLink to="/useenviro">Try Me</NavLink>
          </Button>
        </Bar>
      </Wrapper>
    </div>
  );
}
