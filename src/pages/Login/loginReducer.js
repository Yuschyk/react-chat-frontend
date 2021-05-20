import { SET_LOGIN_FORM_VALUES } from './actions';

const initialState = {
  formFields: undefined,
  isLoading: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_FORM_VALUES:
      return {
        ...state,
        formFields: action.values
      }
  }
  return state;
};


