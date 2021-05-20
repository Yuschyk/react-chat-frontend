import React from 'react';

import { Wrapper, AvatarWrapper, AvatarImg, AvatarStatus, ContentWrap, Name, Message, TimeOfSending } from './styled';
import defaultAvatar from '../../../../../../assets/images/defaultAvatar.png';

export const Dialog = () => {

  return (
    <Wrapper>
      <AvatarWrapper>
        <AvatarImg
          src={defaultAvatar}
        />
      </AvatarWrapper>
      <ContentWrap>
        <Name>
          Jack the Ripper
        </Name>
        <Message>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Message>
      </ContentWrap>
    </Wrapper>
  );
};
