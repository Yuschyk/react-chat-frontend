import React from 'react';
import { ErrorMessage, Input, InputWrap } from './styled';

export const FormInput = ({ name, type, placeholder, errors, touched,onChange }) => {
return (
  <InputWrap touched={touched} errors={errors}>
    <Input  type={type} name={name} placeholder={placeholder} touched={touched} errors={errors}/>
    {errors && touched && <ErrorMessage>{errors}</ErrorMessage>}
  </InputWrap>
)
}
