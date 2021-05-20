import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 13px 20px;
  width: 100%;
  display: flex;
  &:hover{
    background-color: #F3F7FF;
  }
`;

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;

export const AvatarImg = styled.img`
  display: block;
  height: 100%;
`;

export const AvatarStatus = styled.div`

`;


export const ContentWrap = styled.div`
max-width: calc(100% - 52px)  ;
`

export const Name = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #202020;
  margin-bottom: 5px;
  
`;

export const Message = styled.p`
  padding-right: 10px;
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  color: rgba(32, 32, 32, 0.4);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TimeOfSending = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: rgba(32, 32, 32, 0.4);
`;
