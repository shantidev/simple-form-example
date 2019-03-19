import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import styled from 'styled-components';

import Button from './index';

const Wrapper = styled.div`
  padding-top: 65px;
  padding-left: 65px;
  width: 300px;
`;

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const onClick = () => {
      console.log('click');
    };

    return (
      <Wrapper>
        <Button onClick={onClick} disabled={false} type="default">
          default
        </Button>
      </Wrapper>
    );
  })
  .add('transparent', () => {
    const onClick = () => {
      console.log('click');
    };

    return (
      <Wrapper>
        <Button onClick={onClick} disabled={false} type="transparent">
          transparent
        </Button>
      </Wrapper>
    );
  })
  .add('small', () => {
    const onClick = () => {
      console.log('click');
    };

    return (
      <Wrapper>
        <Button onClick={onClick} disabled={false} type="small">
          small
        </Button>
      </Wrapper>
    );
  });
