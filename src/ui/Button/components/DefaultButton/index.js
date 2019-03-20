import React from "react";
import PropTypes from "prop-types";
import * as UI from "./styles";

const DefaultButton = props => {
  const { onClick, disabled, children } = props;

  return (
    <UI.ButtonContainer
      onClick={onClick}
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
};

export default DefaultButton;
