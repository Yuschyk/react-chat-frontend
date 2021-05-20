import { SET_REGISTER_FORM_VALUES } from './actions';

const initialState = {
  formFields: undefined,
  isLoading: false
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER_FORM_VALUES:
      return {
        ...state,
        formFields: action.values
  }
}
  return state;
};

export {
  registerReducer
};


