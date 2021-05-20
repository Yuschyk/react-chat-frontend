import React from 'react';

import { ChatWrap, ChatInnerWrap } from './styled';
import { Dialogs } from './components/Dialogs';
import { Main } from './components/Main';

const Chat = () => {
  return (
    <ChatWrap>
      <ChatInnerWrap>
        <Dialogs/>
        <Main/>
      </ChatInnerWrap>
    </ChatWrap>
  );
};

export {
  Chat
};
