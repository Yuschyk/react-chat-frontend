import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { RegisterWrap, RegisterBlock, Title, Subtitle, FormWrap ,AuthButton, AuthLink } from './styled';

import { registerUser, setValues } from './actions';
import { createNotification } from '../../App/actions';
import {validationSchema} from '../../utils/helpers/validationSchema';
import { FormInput } from '../../components/FormInput/FormInput';

const Register = () => {
  const dispatch = useDispatch();

  const onFormChange = (e) => {
    console.log(e.target.value);
  }
  return (
    <RegisterWrap>
      <RegisterBlock>
        <Title>Регистрация</Title>
        <Subtitle>Для входа в чат, вам нужно зарегистрироваться</Subtitle>
        <FormWrap>
          <Formik
            initialValues={{
              email: '',
              login: '',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={validationSchema}


            onSubmit={(values) => {
              // dispatch(registerUser(values));
              // dispatch(createNotification('suсcess','test notice'))
              console.log(values);
            }}
          >
            {({
              errors,
              touched,
              values,
              isSubmitting
            }) => {

              useEffect(()=>{
                dispatch(setValues(values))
              }, [values] )
              return (
              <Form noValidate='noValidate' >
                <FormInput
                  name='email'
                  type='email'
                  placeholder='E-Mail'
                  errors={errors.email}
                  touched={touched.email}
                  onChange={onFormChange}
                />
                <FormInput
                  name='login'
                  type='text'
                  placeholder='Ваше имя'
                  errors={errors.login}
                  touched={touched.login}
                />
                <FormInput
                  name='password'
                  type='password'
                  placeholder='Пароль'
                  errors={errors.password}
                  touched={touched.password}
                />
                <FormInput
                  name='confirmPassword'
                  type='password'
                  placeholder='Повторить пароль'
                  errors={errors.confirmPassword}
                  touched={touched.confirmPassword}
                />
                <AuthButton type="submit" disabled={isSubmitting}>
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </AuthButton>
              </Form>
            )}}
          </Formik>
          <AuthLink to='/login'>Войти в аккаунт</AuthLink>
        </FormWrap>
      </RegisterBlock>
    </RegisterWrap>
  );
};

export {
  Register
};
