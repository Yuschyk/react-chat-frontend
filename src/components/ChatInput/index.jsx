import React from 'react';

import { Picker } from 'emoji-mart';
import { InputWrap, Input, EmojiButton, PhotoButton, VoiceButton, SendButton } from './styled';
import { useDispatch, useSelector } from 'react-redux';

import { setEmojiPickerVisibility, setChatInputValue } from '../../pages/Chat/actions';

export const ChatInput = () => {

  const dispatch = useDispatch();
  const { emojiPickerVisible, inputValue } = useSelector(state => state.chat.chatInput);

  const onInputChange = (value) => {
    dispatch(setChatInputValue(value));
  };

  const onSelectEmoji = (emoji) => {
    const inputValueWithEmoji = inputValue + emoji.native;

    dispatch(setChatInputValue(inputValueWithEmoji));
  };

  const emojiPickerStyle = {
    position: 'absolute',
    top: '-426px',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  };

  return (
    <InputWrap>
      {
        emojiPickerVisible
        &&
        <Picker
          title='Выбери Эмоджи…'
          onSelect={onSelectEmoji}
          showPreview={false}
          style={emojiPickerStyle}
        />
      }
      <EmojiButton
        onClick={() => {
          dispatch(setEmojiPickerVisibility(!emojiPickerVisible));
        }}
      />
      <Input
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        value={inputValue}
        placeholder='Введите текст сообщения…'
      />
      <PhotoButton/>
      <VoiceButton/>
      <SendButton/>
    </InputWrap>
  );
};
