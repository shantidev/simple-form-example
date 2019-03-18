import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import * as formModule from '../../store/modules/form';

import FormComponent from '../../components/Form';

const Form = props => {
  const { getFormData } = props;

  const [fields, changeFields] = useState({
    name: {
      name: 'name',
      value: '',
    },
  });

  useEffect(() => {
    getFormData();
  }, []);

  const onChange = (value, name) => {
    changeFields({ ...fields, [name]: { ...fields[name], value } });
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

export default connect(
  (state, props) => ({ ...props, ...state.form }),
  dispatch => bindActionCreators({
    getFormData: formModule.getFormData,
  }, dispatch)
)(Form);