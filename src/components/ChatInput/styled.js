import styled from 'styled-components';

import emojiIcon from '../../assets/images/emojiIcon.png';
import photoIcon from '../../assets/images/camera-icon.png';
import voiceIcon from '../../assets/images/microphone-icon.png';
import sendIcon from '../../assets/images/send-icon.png';

export const InputWrap = styled.div`
  background: #FFFFFF;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 45px;
  resize: none;
  vertical-align: middle;
  border: 0;
  font-size: 14px;
  line-height: 41px;
  letter-spacing: 0.1px;
  text-indent: 2px;
  color: #202020;

  &::placeholder {
    color: #B4B4B4;
  }
`;

export const EmojiButton = styled.button`
  width: 45px;
  height: 45px;
  border: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-image: url(${emojiIcon});
  background-color: #ffffff;
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const PhotoButton = styled.button`
  width: 40px;
  height: 45px;
  border: 0;
  background-image: url(${photoIcon});
  background-color: #ffffff;
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const VoiceButton = styled.button`
  width: 40px;
  height: 45px;
  border: 0;
  background-image: url(${voiceIcon});
  background-color: #ffffff;
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const SendButton = styled.button`
  width: 45px;
  height: 45px;
  border: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-image: url(${sendIcon});
  background-color: #ffffff;
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

