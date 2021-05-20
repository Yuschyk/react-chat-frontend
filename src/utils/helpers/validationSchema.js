import * as Yup from 'yup';

export const validationSchema =  Yup.object()
  .shape({
    email: Yup.string()
      .email('Некорректный Email')
      .required('Email обязательный!'),
    login: Yup.string()
      .min(2, 'Слишком короткое имя')
      .required('Имя является обязательным'),
    password: Yup.string()
      .required('Пароль является обязательным')
      .min(9,'Слишком короткий пароль'),
    confirmPassword: Yup.string()
      .required('Подтверждение пароля обязательно')
      .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
  })
