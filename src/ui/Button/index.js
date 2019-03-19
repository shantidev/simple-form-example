import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DefaultButton from './components/DefaultButton';
import SmallButton from './components/SmallButton';

const Button = props => {
  const { onClick, disabled, type, children } = props;

  const getButtonOfType = () => {
    const typesMap = new Map([
      [
        'default',
        () => (
          <DefaultButton type="default" disabled={disabled} onClick={onClick}>
            {children}
          </DefaultButton>
        )
      ],
      [
        'transparent',
        () => (
          <DefaultButton
            type="transparent"
            disabled={disabled}
            onClick={onClick}
          >
            {children}
          </DefaultButton>
        )
      ],
      [
        'small',
        () => (
          <SmallButton disabled={disabled} onClick={onClick}>
            {children}
          </SmallButton>
        )
      ]
    ]);

    return typesMap.get(type)();
  };

  return <Fragment>{getButtonOfType()}</Fragment>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'transparent', 'small'])
};

Button.defaultProps = {
  type: 'default'
};

export default Button;
