export const SET_EMOJI_PICKER_VISIBILITY = 'SET_EMOJI_PICKER_VISIBILITY';
export const SET_CHAT_INPUT_VALUE = 'SET_CHAT_INPUT_VALUE';

export const setEmojiPickerVisibility = (data) => ({
  type: SET_EMOJI_PICKER_VISIBILITY,
  payload: data
});


export const setChatInputValue = (data) => ({
  type: SET_CHAT_INPUT_VALUE,
  payload: data
});
