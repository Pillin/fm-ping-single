import styled from "@emotion/styled";
import { Theme } from "../theme";

export const P = styled.p<{
  margin?: string, theme?: Theme
}>`
  color: ${({ theme }) => theme.typography.p.color};
  margin: ${({ margin }) => margin || "0px"};
  font-weight: 400;
  font-size: 14px;
  line-heigh: 14px;

`;

export const H1 = styled.h1`
  color: #969696;
  font-weight: 300;
  margin: 0px;
  font-size: 1.4rem;
  @media (min-width: 769px) {
    font-size: 48px;
  }
`;
export const H2 = styled.h2`
  color: #15202A;
  font-weight: 300;
  margin: 0px 0px;
  font-size: 20px;
`;

export const H3 = styled.h3`
  color: hsla(0, 0%, 100%, 0.75);
  font-size: 0.8em;
  font-weight: 500;
  @media (min-width: 769px) {
    font-size: 1em;
  }
`;
export const H4 = styled.h4``;
export const H5 = styled.h5``;


export const Span = styled.span`
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #9B9B9B;
`;