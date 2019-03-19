import styled from "styled-components";
import colors from "../../../../constants/colorsErz";

export const ButtonContainer = styled.button`
  height: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${colors.dark};
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.86px;
  text-transform: uppercase;
  background-color: ${colors.transparent};
  transition: all ease-in-out 0.3s;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  /* For unset default button styles */
  padding: 0;
  outline: none;
  border: none;

  &:hover {
    color: ${colors.deepGreen};

    svg {
      transition: fill ease-in-out 0.3s;
      fill: ${colors.deepGreen};
    }
  }

  &:disabled {
    color: ${colors.grey};

    &:hover {
      color: ${colors.grey};

      svg {
        fill: ${colors.grey};
      }
    }
  }
`;

export const ButtonChildren = styled.span`
  margin-right: 16px;
`;
