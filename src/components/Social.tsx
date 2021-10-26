import styled from "@emotion/styled";
import { Button } from "./Buttons";
import { Twitter, Facebook, Instagram } from '@emotion-icons/fa-brands';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0px 16px;
  padding: 16px;
  max-width: 1440px;
  width: 100%;

  @media (min-width: 769px) {
    justify-content: center;
  }
`;


const Social = () => {
  return <Container>
    <Button><Facebook /></Button>
    <Button><Twitter /></Button>
    <Button><Instagram /></Button>
  </Container>
}


export default Social;