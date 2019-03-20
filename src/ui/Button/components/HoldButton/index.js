import React from 'react';
import PropTypes from 'prop-types';
import * as UI from './styles';

const HoldButton = props => {
  const { onClick, disabled } = props;

  const handleClick = async(e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <UI.ButtonContainer
      onClick={(e) => handleClick(e)}
      disabled={disabled}
      type="button"
    >
      <UI.Svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
        <UI.Circle1/>
        <UI.Circle2/>
        <UI.Circle3/>
        <UI.Circle4/>
      </UI.Svg>
    </UI.ButtonContainer>
  );
};

HoldButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default HoldButton;
