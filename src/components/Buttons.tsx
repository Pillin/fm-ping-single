import styled from "@emotion/styled";


export const Button = styled.button`
  background: transparent;
  border: 1px solid #4C7BF340;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
   width: 25px;
    height: 25px;

  > svg {
    color: #4C7BF3;
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-color: #4C7BF3;
    background-color: #4C7BF3;
     > svg {
       color: white;
     }
  }
`;

export const PrimaryButton = styled.button`
    background: #4C7BF3;
    box-shadow: 0px 5px 10px 2px rgba(76, 123, 243, 0.230414);
    border-radius: 28px;
    width: 100%;
    height: 56px;
    color: white;
    border-style: solid;
    border-color: transparent;

    @media (min-width: 769px) {
      width: 200px;
    }
`;