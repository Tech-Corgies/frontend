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
