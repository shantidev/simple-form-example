import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormComponent from '../../components/Form';

const Form = props => {
  const [fields, changeFields] = useState({
    name: {
      name: 'name',
      value: '',
    },
  });

  const onChange = (value, name) => {
    changeFields({ ...fields, [name]: {...fields[name], value}});
  };

  const onSubmit = () => {
    console.log('submitting: ', fields);
  };

  const form = {
    fields,
    onChange,
    onSubmit,
  };

  return <FormComponent form={form}/>
};

Form.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default Form;