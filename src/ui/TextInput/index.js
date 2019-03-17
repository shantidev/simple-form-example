import React, { useState } from "react";
import PropTypes from "prop-types";
import * as UI from "./styles";

const TextInput = React.forwardRef((props, ref) => {
  const { value, name, invalid, label, change, icon } = props;

  const [focus, setFocus] = useState({
    custom: value.length > 0,
    default: false
  });

  const onChange = e => {
    const value = e.target.value;
    change(value, name);
  };

  const onFocus = () => {
    setFocus({
      custom: true,
      default: true
    });
  };

  const onBlur = () => {
    setFocus({
      custom: value.length > 0,
      default: false
    });
  };

  return (
    <UI.InputContainer>
      <UI.InputWrapper focus={focus.default} invalid={invalid}>
        <UI.InputLabel focus={focus.custom}>
          {label}
        </UI.InputLabel>
        <UI.Input
          ref={ref}
          value={value}
          name={name}
          type="text"
          autoComplete="off"
          onChange={e => onChange(e)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {icon && <UI.InputIcon url={icon} focus={focus.default} />}
      </UI.InputWrapper>
      {invalid && <UI.InputError>{invalid}</UI.InputError>}
    </UI.InputContainer>
  );
});

TextInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  // TODO validation in progress
  required: PropTypes.bool,
  invalid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool
  ]),
  /* Use only black color icons */
  icon: PropTypes.any
};

export default TextInput;
