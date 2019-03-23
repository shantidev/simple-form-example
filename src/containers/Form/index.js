import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import * as formModule from '../../store/modules/form';

import FormComponent from '../../components/Form';

const Form = props => {
  const { submitForm } = props;

  const [fields, changeFields] = useState({
    name: {
      name: 'name',
      value: '',
    },
    race: {
      name: 'race',
      value: '',
    },
    class: {
      name: 'class',
      value: '',
    },
    startWeapon: {
      name: 'startWeapon',
      value: '',
    },
    about: {
      name: 'about',
      value: '',
    }
  });

  const [errors, getErrors] = useState({
    name: false,
    race: false,
    class: false,
    startWeapon: false,
    about: false,
  });

  const [submit, checkSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      onValidate();
    }
  }, [fields]);

  const onChange = (value, name) => {
    changeFields({ ...fields, [name]: { ...fields[name], value }});
  };

  const onValidate = (field) => {
    const invalids = {
      name: fields.name.value.length === 0,
      race: fields['race'].value.length === 0,
      class: fields.class.value.length === 0,
      startWeapon: fields.startWeapon.value.length === 0,
      about: fields.about.value.length === 0,
    };

    const validForm = !invalids.name && !invalids.race && !invalids.class && !invalids.startWeapon && !invalids.about;

    getErrors(field
      ? { ...errors, [field]: invalids[field] }
      : {...invalids}
    );

    return validForm;
  };

  const onSubmit = () => {
    checkSubmit(true);

    if (onValidate()) {
      submitForm({
        name: fields.name.value,
        race: fields['race'].value,
        class: fields.class.value,
        startWeapon: fields.startWeapon.value,
        about: fields.about.value,
      })
    } else {
      alert('Invalid form')
    }
  };

  const form = {
    fields,
    errors,
    onChange,
    onSubmit,
  };

  return <FormComponent form={form}/>
};

Form.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default connect(
  (state, props) => ({ ...props, ...state.form }),
  dispatch => bindActionCreators({
    submitForm: formModule.submitForm,
  }, dispatch)
)(Form);