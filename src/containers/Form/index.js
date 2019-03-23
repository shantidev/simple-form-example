import React, { useState } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import * as formModule from '../../store/modules/form';
import { useCallbackState } from '../../helpers/useCallbackState';

import FormComponent from '../../components/Form';

const Form = props => {
  const { submitForm } = props;

  /* Set errors on fields */
  const [errors, getErrors] = useState({
    name: false,
    race: false,
    classes: false,
    startWeapon: false,
    about: false,
  });

  /* Form validation on submit */
  const onValidateForm = () => {
    const invalids = {
      name: name.value.length === 0,
      race: race.value.length === 0,
      classes: classes.value.length === 0,
      startWeapon: startWeapon.value.length === 0,
      about: about.value.length === 0,
    };

    const validForm = !invalids.name && !invalids.race && !invalids.class && !invalids.startWeapon && !invalids.about;

    getErrors({...invalids}
    );

    return validForm;
  };

  /* Validate field */
  const onValidateField = (field) => {
    getErrors({ ...errors, [field.name]: field.value.length === 0})
  };

  /* Create fields state */
  const [name, onChangeName] = useCallbackState({
    name: 'name',
    value: '',
  }, () => onValidateField(name));

  const [race, onChangeRace] = useCallbackState({
    name: 'race',
    value: '',
  }, () => onValidateField(race));

  const [classes, onChangeClasses] = useCallbackState({
    name: 'classes',
    value: '',
  }, () => onValidateField(classes));

  const [startWeapon, onChangeStartWeapon] = useCallbackState({
    name: 'startWeapon',
    value: '',
  }, () => onValidateField(startWeapon));

  const [about, onChangeAbout] = useCallbackState({
    name: 'about',
    value: '',
  }, () => onValidateField(about));

  /* OnChange functions of fields */
  const changeName = (value) => onChangeName({...name, value});
  const changeRace = (value) => onChangeRace({...race, value});
  const changeClasses = (value) => onChangeClasses({...classes, value});
  const changeStartWeapon = (value) => onChangeStartWeapon({...startWeapon, value});
  const changeAbout = (value) => onChangeAbout({...about, value});

  /* Submitting form */
  const onSubmit = () => {
    const form = {
      name: name.value,
      race: race.value,
      classes: classes.value,
      startWeapon: startWeapon.value,
      about: about.value,
    };

    if (onValidateForm()) {
      submitForm(form);
      return;
    }

    alert('Please enter valid values')
  };

  const form = {
    fields: {
      name: {
        ...name,
        onChange: changeName,
      },
      race: {
        ...race,
        onChange: changeRace,
      },
      classes: {
        ...classes,
        onChange: changeClasses,
      },
      startWeapon: {
        ...startWeapon,
        onChange: changeStartWeapon,
      },
      about: {
        ...about,
        onChange: changeAbout,
      }
    },
    errors,
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