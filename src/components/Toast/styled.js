import styled, { keyframes } from 'styled-components';
import closeIcon from './assets/close.svg'
import successIcon from './assets/success.svg'

const notificationAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  10% {
    transform: translateX(0);
  }
  80% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(120%);
  }
`


const NotificationContainer = styled.div`
  max-width: 365px;
  width: 100%;
  position: fixed;
  top: 14px;
  right: 14px;
`;

const Notification = styled.div`
  width: 100%;
  padding: 20px 18px 14px 10px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  opacity: 0.9;
  background-color: rgb(92, 184, 92);
  color: #ffffff;
  border-radius: 4px;
  display: flex;
  align-items: start;
  transition: transform 0.8s ease-in-out;
  animation: ${notificationAnimation} 5s forwards;

  &:hover{
    box-shadow: 0 0 12px #fff;
    opacity: 1;
  }
` ;

const CloseButton = styled.button`
background-image: url(${closeIcon});
  background-size: contain;
  width: 18px;
  height: 18px;
  display: block;
  position: absolute;
  right: 5px;
  top: 5px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const ImgWrap = styled.div`
  margin-right: 15px;
`;

const Img = styled.img.attrs({
  src: successIcon
})`
  
  `;

const ContentWrap = styled.div`

`;

const NoticeTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  margin-bottom: 8px;
`;

const NoticeMessage = styled.div`
font-size: 14px;
`;





export {
  NotificationContainer,
  Notification,
  CloseButton,
  ImgWrap,
  Img,
  ContentWrap,
  NoticeTitle,
  NoticeMessage
};
