import React from 'react';
import PropTypes from 'prop-types';
import * as UI from './styles';

import TextInput from '../../ui/TextInput';

const Form = props => {
  const { form } = props;
  //const input = useRef(null);

  return (
    <UI.FormContainer>
      <UI.FormRow>
        <TextInput
          // ref={input}
          name={form.fields.name.name}
          value={form.fields.name.value}
          change={form.onChange}
          label="Ваше имя"
          // invalid={form.name}
        />
      </UI.FormRow>
      <div onClick={form.onSubmit}>BUTTON</div>
    </UI.FormContainer>
  )
};

Form.propTypes = {
  form: PropTypes.object,
};

export default Form;