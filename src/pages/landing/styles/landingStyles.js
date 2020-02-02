import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 90px;
  line-height: 0px;
  // color: mediumseagreen;
`;
export const Subtitle = styled.h2`
  font-size: 50px;
  line-height: 5px;
  text-align: center;
//   position: relative;
//   bottom: 30px;
  // color: mediumseagreen;
`;
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
  height: 100vh;
`;
export const NavBar = styled.section`
  align-self: flex-end;
  display: inline;
`;
export const Bar = styled.section`
  align-self: center;
`;
export const Button = styled.button`
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
