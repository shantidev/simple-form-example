import styled, { css } from "styled-components";
import colors from "../../../../constants/colorsErz";

export const ButtonContainer = styled.button`
  height: 64px;
  width: 100%;
  padding: 0 40px 0 40px;
  color: ${colors.white};
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.86px;
  text-transform: uppercase;
  background-color: ${colors.accentGreen};
  transition: all ease-in-out 0.3s;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  /* For unset default button styles */
  outline: none;
  border: none;

  &:hover {
    background-color: ${colors.deepGreen};
  }

  ${props =>
    props.styles === "transparent" &&
    css`
      color: ${colors.dark};
      background-color: ${colors.transparent};
      border: 1px solid ${colors.accentGreen};

      &:hover {
        color: ${colors.white};
        border: 1px solid ${colors.deepGreen};
      }
    `}

  &:disabled {
    background-color: ${props =>
      props.styles === "transparent" ? colors.transparent : colors.lightGrey};
    border: ${props =>
      props.styles === "transparent"
        ? "1px solid " + colors.lightGrey
        : "none"};
    color: ${colors.grey};

    &:hover {
      color: ${colors.grey};
    }
  }
`;
