import React from 'react';

import { Formik, Form} from 'formik';
import { LoginWrap, LoginBlock, Title, Subtitle, FormWrap, AuthButton, AuthLink} from './styled';
import { validationSchema } from '../../utils/helpers/validationSchema';
import { FormInput } from '../../components/FormInput/FormInput';


const Login = () =>{
return(
  <LoginWrap>
    <LoginBlock>
      <Title>Войти в аккаунт</Title>
      <Subtitle>Пожалуйста, войдите в свой аккаунт</Subtitle>
      <FormWrap>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            email: '',
            password: ''
          }}

          onSubmit={(values) => {
            console.log(values);

          }}
        >
          {({errors, touched}) => (
          <Form noValidate>
            <FormInput
              name='email'
              type='email'
              placeholder='E-Mail'
              errors={errors.email}
              touched={touched.email}
            />
            <FormInput
              name='password'
              type='password'
              placeholder='Пароль'
              errors={errors.password}
              touched={touched.password}
            />
            <AuthButton type="submit" >
              ВОЙТИ В АККАУНТ
            </AuthButton>
          </Form>
          )}
        </Formik>
        <AuthLink to='/register'>Зарегистрироваться</AuthLink>
      </FormWrap>
    </LoginBlock>
  </LoginWrap>
)
}

export {
  Login
}
