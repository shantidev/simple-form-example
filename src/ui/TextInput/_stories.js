import React, { useState, useRef } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

import styled from "styled-components";

import Flexbox from "../../components/Flexbox";
import TextInput from "./index";

import icon from "../../assets/icons/baseline-code-24px.svg";

/* Some styles */
const Fields = styled.div`
  width: 500px;
  padding: 60px;
`;

const Field = styled.div`
  margin-bottom: 24px;
`;

storiesOf("TextInput", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const [field, changeField] = useState("");
    const [invalid, setInvalid] = useState(null);

    const onValidateField = input => {
      const valid = input.length > 0;
      setInvalid(!valid ? "Ошибка" : null);
    };

    const onChangeField = value => {
      changeField(value);
      onValidateField(value);
    };

    const input = useRef(null);

    return (
      <Flexbox>
        <TextInput
          ref={input}
          name="field"
          value={field}
          change={onChangeField}
          label="Ваше имя"
          invalid={invalid}
          icon={icon}
        />
      </Flexbox>
    );
  })
  .add("some", () => {
    /* On change fields values */
    const [fields, changeFields] = useState({
      input1: "",
      input2: ""
    });

    const onChangeValues = (value, name) => {
      changeFields({ ...fields, [name]: value });
    };

    const onValidateValues = (value, name) => {};

    const input1 = useRef(null);
    const input2 = useRef(null);

    return (
      <Fields>
        <Field>
          <TextInput
            ref={input1}
            name="input1"
            value={fields.input1}
            change={onChangeValues}
            label="Ваше имя"
          />
        </Field>
        <Field>
          <TextInput
            ref={input2}
            name="input2"
            value={fields.input2}
            change={onChangeValues}
            label="Ваша фамилия"
          />
        </Field>
      </Fields>
    );
  });
