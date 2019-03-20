import styled from 'styled-components';
import colors from '../../../../constants/colors';

export const ButtonContainer = styled.button`
  height: 64px;
  width: 100%;
  padding: 0 40px 0 40px;
  color: ${colors.marineBright};
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.86px;
  text-transform: uppercase;
  text-shadow: 0 0 2px ${colors.marineBright};
  background-color: ${colors.transparent};
  border: 2px solid ${colors.marineBright};
  box-shadow: 0 0 2px ${colors.marineBright}, inset 0 0 2px ${colors.marineBright};
  transition: all ease-in-out 0.3s;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  /* For unset default button styles */
  outline: none;

  &:hover {
    color: ${colors.marineUltraLight};
    border: 2px solid ${colors.marineUltraLight};
    box-shadow: 0 0 6px ${colors.marineBright}, inset 0 0 6px ${colors.marineBright};
  }
`;
