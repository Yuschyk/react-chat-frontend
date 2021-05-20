import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const MainHeader = styled.div`
  height: 60px;
  width: 100%;
  border-bottom: 2px solid #F7F7F7;
`;

export const HeaderWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DialogTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #202020;
  margin: 0;
`;

export const ChatWrap = styled.div`
  padding: 0 25px 35px;
  height: calc(100vh - 60px);
`;

export const MessagesWrap = styled.div`
  width: 100%;
  height: calc(100% - 47px);
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 20px;
  padding-right: 10px;


  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-button {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d7d7d7;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #d7d7d7;
  }
`;

