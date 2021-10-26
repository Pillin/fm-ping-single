import styled from "@emotion/styled";
import { withTheme } from '@emotion/react';


import { Theme } from "../theme";

const Container = styled.section<{ theme: Theme, error: string }>`
  width: 100%;
  max-width: 100%;
  height: 90px;
  min-height: 64px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > span {
    height: 20px;
    padding: 0px 0px 0px 32px;
    color: ${({ error }) => error ? "red" : "green"}
  }

  @media (min-width: 769px) {
   max-width: 540px;
  }
`;

const Input = styled.input<{ theme: Theme, error: string }>`
  width: 100%;
  max-width: 100%;
  max-height: 56px;
  height: 100%;
  font-weight: 400;
  font-size: 18px;
  outline: transparent;
  line-height: 0.25px;
  background: #FFFFFF;
  border: ${({ error }) => `1px solid ${error ? "red" : "#C2D3FF"}`};
  box-sizing: border-box;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.0001);
  border-radius: 28px;
  padding: 8px 32px;

  &::placeholder {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #B8C7ED;
  }

  @media (min-width: 769px) {
   max-width: 540px;
  }
`;


const InputC = (props: { theme: Theme, onChange: Function, value: string, name: string, error: string }) => {
  return <Container theme={props.theme} error={props.error}>
    <Input
      error={props.error}
      id={props.name}
      name={props.name}
      theme={props.theme}
      placeholder="Your email address..."
      value={props.value}
      onChange={e => props.onChange(e)}
    />
    <span>{props.error}</span>
  </Container>
};

export default withTheme(InputC);