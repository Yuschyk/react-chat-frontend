import React from 'react';

import { OnlineStatus } from '../../../../components/OnlineStatus';
import { Container, MainHeader, DialogTitle, ChatWrap, HeaderWrap, MessagesWrap } from './styled';
import { ChatInput } from '../../../../components/ChatInput';
import { Message } from '../../../../components/Message';

export const Main = () => {

  return (
    <Container>
      <MainHeader>
        <HeaderWrap>
          <DialogTitle>
            Jack the Ripper
          </DialogTitle>
          <OnlineStatus
            isOnline={true}
          />
        </HeaderWrap>
      </MainHeader>
      <ChatWrap>
        <MessagesWrap>
          <Message text='This is test message' isMineMessage={true}/>
          <Message text='This is test message' isMineMessage={false}/>
          <Message text='This is test message' isMineMessage  ={true}/>
          <Message text='This is test message' isMineMessage={false}/>
          <Message text='This is test message' isMineMessage={false}/>
          <Message text='This is test message' isMineMessage={false}/>
          <Message text='This is test message' isMineMessage={true}/>
          <Message text='This is test message' isMineMessage={true}/>
          <Message text='This is test message' isMineMessage={true}/>
          <Message text='This is test message' isMineMessage={true}/>
          <Message text='This is test message' isMineMessage={true}/>
          <Message text='This is test message' isMineMessage={true}/>
          <Message text='This is test message' isMineMessage={true}/>
          <Message text='This is test message' isMineMessage={true}/>
          <Message text='This is test message' isMineMessage={true}/>
          <Message text='This is test message' isMineMessage={true}/>
        </MessagesWrap>
        <ChatInput/>
      </ChatWrap>
    </Container>
  );
};
