import { SET_NOTIFICATION, DELETE_NOTIFICATION, SET_AUTH } from './actions';


const initialState = {
  isAuth: true,
  authToken: undefined,
  notificationList: [
    // {
    // id:'qwe',
    // type: 'success',
    // message: 'Регистрация прошла успешно'
    // },
  ]
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION: {
      return {
        ...state,
        notificationList: [...state.notificationList, action.payload]
      };
    }

    case DELETE_NOTIFICATION: {
      const itemIndex = state.notificationList.findIndex(e => e.id === action.payload);
      const newArr = [...state.notificationList]
      newArr.splice(itemIndex, 1);
      return {
        ...state,
        notificationList: newArr

      };
    }
    case SET_AUTH: {
      return {
        ...state,
        isAuth: action.payload
      }
    }

  }
  return state;
};

export {
  appReducer
};
