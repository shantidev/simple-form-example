import React from 'react';
import PropTypes from 'prop-types';
import * as UI from './styles';

import TextInput from '../../ui/TextInput';
import Typography from '../../ui/Typography';
import Button from '../../ui/Button';

const Form = props => {
  const { form } = props;

  return (
    <UI.FormContainer>
      <Typography element="h1" styles={UI.FormTitle}>CREATE A HERO</Typography>
      <UI.FormRow>
        <UI.FormField>
          <TextInput
            name={form.fields.name.name}
            value={form.fields.name.value}
            change={form.fields.name.onChange}
            label="Hero name"
            invalid={form.errors.name}
          />
        </UI.FormField>
        <UI.FormField>
          <TextInput
            name={form.fields.race.name}
            value={form.fields.race.value}
            change={form.fields.race.onChange}
            label="Race"
            invalid={form.errors.race}
          />
        </UI.FormField>
      </UI.FormRow>
      <UI.FormRow>
        <UI.FormField>
          <TextInput
            name={form.fields.classes.name}
            value={form.fields.classes.value}
            change={form.fields.classes.onChange}
            label="Class"
            invalid={form.errors.classes}
          />
        </UI.FormField>
        <UI.FormField>
          <TextInput
            name={form.fields.startWeapon.name}
            value={form.fields.startWeapon.value}
            change={form.fields.startWeapon.onChange}
            label="Start weapon"
            invalid={form.errors.startWeapon}
          />
        </UI.FormField>
      </UI.FormRow>
      <UI.FormRow>
        <UI.FormField>
          <TextInput
            name={form.fields.about.name}
            value={form.fields.about.value}
            change={form.fields.about.onChange}
            label="About"
            invalid={form.errors.about}
          />
        </UI.FormField>
      </UI.FormRow>
      <Button styleType="default" onClick={form.onSubmit}>CREATE</Button>
    </UI.FormContainer>
  )
};

Form.propTypes = {
  form: PropTypes.object,
};

export default Form;