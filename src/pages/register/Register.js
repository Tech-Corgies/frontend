import React from 'react';

export default function Register() {
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
  const Blurb = styled.p`
  padding: 50px;
  font-size: 18px;
  line-height: 22px;
  `;
  return (
    <div>
    <Wrapper>
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
      <Blurb>
      Enviro streamlines the recycling process by providing users with all the information that they need without any of the hassle. It (1) classifies the user's image based on what kind of trash it is, (2) teach the user how to recycle that item, and (3) measure the user's impact on the environment. 
      </Blurb>
    </Wrapper>
    </div>
  );
}
