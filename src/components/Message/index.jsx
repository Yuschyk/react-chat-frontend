import React from 'react';
import { MessageWrapper, ContentWrap, Avatar, MessageBlock, Date } from './styled';
import DefaultAvatar from '../../assets/images/defaultAvatar.png'
const Message = ({ text, isMineMessage }) => {
  return (
<MessageWrapper isMineMessage={isMineMessage}>
  <Avatar src={DefaultAvatar} isMineMessage={isMineMessage}/>
  <ContentWrap>
    <MessageBlock isMineMessage={isMineMessage}>
      {text}
    </MessageBlock>
    <Date>Вчера, в 12:31</Date>
  </ContentWrap>
</MessageWrapper>
  );
};

export {
  Message
};
