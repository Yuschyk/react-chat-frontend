import { axiosInstance } from './instance';

const auth = {
  register: registerData => {
    return axiosInstance.post('auth/register',registerData)
      .then(response => response.data)
      .catch(e =>{
        throw new Error(e.response.data.message);
      })
  },

  login: loginData => axiosInstance.post('auth/login', loginData),

  isAuth: () => axiosInstance.post('auth/isAuth')
};

export {
  auth
}

