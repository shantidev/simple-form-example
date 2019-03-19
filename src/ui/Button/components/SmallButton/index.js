import React from "react";
import PropTypes from "prop-types";
import * as UI from "./styles";

const SmallButton = props => {
  const { onClick, disabled, children } = props;

  return (
    <UI.ButtonContainer onClick={onClick} disabled={disabled} type="button">
      <UI.ButtonChildren>{children}</UI.ButtonChildren>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
      >
        <path d="M14.5857864,13 L5,13 L5,11 L14.5857864,11 L13.8786797,10.2928932 L15.2928932,8.87867966 L18.1213203,11.7071068 L17.8284271,12 L18.1213203,12.2928932 L15.2928932,15.1213203 L13.8786797,13.7071068 L14.5857864,13 Z" />
      </svg>
    </UI.ButtonContainer>
  );
};

SmallButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default SmallButton;
