export const SET_REGISTER_FORM_VALUES = 'SET_REGISTER_FORM_VALUES';
export const START_REGISTRATION = 'START_REGISTRATION';
import { auth}  from '../../core/api/auth';
import { setAuthorization } from '../../App/actions';

export const setValues = (values) => ({
  type: SET_REGISTER_FORM_VALUES,
  values
})

export const registerUser = userData => dispatch => {
  auth.register(userData)
    .then(response =>{
      console.log(response);
    })
    .then(()=>{
      dispatch(setAuthorization(true));
    })
}
