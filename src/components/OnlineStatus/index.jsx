import React from 'react';

import { StatusWrap, StatusDot, StatusText } from './styled';

export const OnlineStatus = ({ isOnline }) => {

  let text = null;

  if (isOnline){
    text = <StatusText>онлайн</StatusText>;
  } else {
    text = <StatusText>оффлайн</StatusText>;

  }
  return (
    <StatusWrap>
      <StatusDot isOnline={isOnline}/>
      { text }

    </StatusWrap>
  );
};
