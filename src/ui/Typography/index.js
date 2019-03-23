import React from 'react';
import PropTypes from 'prop-types';
import * as UI from './styles';

const Typography = props => {
  const { children, element, styles } = props;

  const getTypographyElement = () => {
    const typesMap = new Map([
      ['h1', () => (
        <UI.TypographyH1 styles={styles}>{children}</UI.TypographyH1>
      )],
      ['h2', () => (
        <UI.TypographyH2 styles={styles}>{children}</UI.TypographyH2>
      )],
      ['h3', () => (
        <UI.TypographyH3 styles={styles}>{children}</UI.TypographyH3>
      )],
    ]);

    return typesMap.get(element)();
  };

  return getTypographyElement();
};

Typography.propTypes = {
  element: PropTypes.string.isRequired,
  styles: PropTypes.object,
};

export default Typography;