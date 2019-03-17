import React from 'react';
import PropTypes from 'prop-types';
import * as UI from './styles';

import TextInput from '../../ui/TextInput';

const Form = props => {
  const { form } = props;

  return (
    <UI.FormContainer>
      <UI.FormRow>
        <TextInput
          name={form.fields.name.name}
          value={form.fields.name.value}
          change={form.onChange}
          label="Ваше имя"
        />
      </UI.FormRow>
      <button onClick={form.onSubmit}>BUTTON</button>
    </UI.FormContainer>
  )
};

Form.propTypes = {
  form: PropTypes.object,
};

export default Form;