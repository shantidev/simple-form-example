import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DefaultButton from './components/DefaultButton';
import HoldButton from './components/HoldButton';

const Button = props => {
  const { onClick, disabled, styleType, children } = props;

  const getButtonOfType = () => {
    const typesMap = new Map([
      [
        'default',
        () => (
          <DefaultButton disabled={disabled} onClick={onClick}>
            {children}
          </DefaultButton>
        )
      ],
      [
        'hold',
        () => (<HoldButton onClick={onClick}/>)
      ]
    ]);

    return typesMap.get(styleType)();
  };

  return <Fragment>{getButtonOfType()}</Fragment>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  styleType: PropTypes.oneOf(['default', 'hold'])
};

Button.defaultProps = {
  styleType: 'default'
};

export default Button;
