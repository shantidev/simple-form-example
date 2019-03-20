import React from 'react';
import PropTypes from 'prop-types';
import * as UI from './styles';

import TextInput from '../../ui/TextInput';
import Button from '../../ui/Button';

const Form = props => {
  const { form } = props;

  const onClickMock = () => {
    form.onSubmit();
  };

  return (
    <UI.FormContainer>
      <UI.FormRow>
        <UI.FormField>
          <TextInput
            name={form.fields.name.name}
            value={form.fields.name.value}
            change={form.onChange}
            label="Hero name"
          />
        </UI.FormField>
        <UI.FormField>
          <TextInput
            name={form.fields.name.name}
            value={form.fields.name.value}
            change={form.onChange}
            label="Race"
          />
        </UI.FormField>
      </UI.FormRow>
      <UI.FormRow>
        <UI.FormField>
          <TextInput
            name={form.fields.name.name}
            value={form.fields.name.value}
            change={form.onChange}
            label="Class"
          />
        </UI.FormField>
        <UI.FormField>
          <TextInput
            name={form.fields.name.name}
            value={form.fields.name.value}
            change={form.onChange}
            label="Start weapon"
          />
        </UI.FormField>
      </UI.FormRow>
      <UI.FormRow>
        <UI.FormField>
          <TextInput
            name={form.fields.name.name}
            value={form.fields.name.value}
            change={form.onChange}
            label="Little history"
          />
        </UI.FormField>
      </UI.FormRow>
      <UI.FormRow>
        <UI.FormField>
          <TextInput
            name={form.fields.name.name}
            value={form.fields.name.value}
            change={form.onChange}
            label="Hero photo"
          />
        </UI.FormField>
      </UI.FormRow>
      <Button styleType="hold" onClick={onClickMock}>START GAME</Button>
    </UI.FormContainer>
  )
};

Form.propTypes = {
  form: PropTypes.object,
};

export default Form;