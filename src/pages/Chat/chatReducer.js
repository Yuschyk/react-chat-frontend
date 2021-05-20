import { SET_EMOJI_PICKER_VISIBILITY, SET_CHAT_INPUT_VALUE } from './actions';

const initialState = {
  chatInput: {
    inputValue: '',
    emojiPickerVisible: false
  }
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMOJI_PICKER_VISIBILITY: {
      return {
        ...state,
        chatInput: {
          ...state.chatInput,
          emojiPickerVisible: action.payload
        }
      };
    }

    case SET_CHAT_INPUT_VALUE : {
      return {
        ...state,
        chatInput: {
          ...state.chatInput,
          inputValue: action.payload
        }
      }
    }
  }
  return state;
};
