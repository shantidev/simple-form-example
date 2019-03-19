import React from "react";
import PropTypes from "prop-types";
import * as UI from "./styles";

const DefaultButton = props => {
  const { onClick, disabled, type, children } = props;

  return (
    <UI.ButtonContainer
      onClick={onClick}
      styles={type}
      disabled={disabled}
      type="button"
    >
      {children}
    </UI.ButtonContainer>
  );
};

DefaultButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["default", "transparent"])
};

export default DefaultButton;
