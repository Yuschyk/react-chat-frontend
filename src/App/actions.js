export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
export const SET_AUTH = 'SET_AUTH';

export const setNotice = (id,type, message) =>({
type: SET_NOTIFICATION,
  payload: {
  id,
  type,
  message
  }
})

export const deleteNotice = (id) => ({
  type: DELETE_NOTIFICATION,
  payload: id
})

export const createNotification = (id,type,message) => dispatch =>{
  dispatch(setNotice(id,type,message))
}

export const setAuthorization = (value) => ({
  type: SET_AUTH,
  payload: value
})



