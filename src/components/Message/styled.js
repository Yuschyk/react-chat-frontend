import styled from 'styled-components';

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.isMineMessage) ? 'row' : 'row-reverse'};
  margin-top: 12px;
  z-index: 0;
`;

const Avatar = styled.img`
  display: block;
  width: 30px;
  height: 30px;
  margin: ${props => (props.isMineMessage) ? '0 14px 0 0' : '0 0 0 14px'};
`;

const ContentWrap = styled.div`

`;

const MessageBlock = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 13px 17px;
  margin-bottom: 8px;
  background: ${props => (props.isMineMessage) ? '#3674FF' : '#ffffff'};
  border: ${props => (props.isMineMessage) ? '0' : '1px solid #ECECEC'};
  box-shadow: ${props => (props.isMineMessage) ? '#0px 5px 5px rgba(54, 116, 255, 0.196733)' 
  : '0px 4px 4px rgba(0, 0, 0, 0.0220444)'};
  border-radius: ${props => (props.isMineMessage) ? '12px 12px 12px 0px' : '12px 12px 0 12px'};
  color: ${props => (props.isMineMessage) ? '#ffffff' : '#202020'};
`;

const Date = styled.div`
  font-size: 12px;
  color: #202020;
  opacity: 0.4;
`;

export {
  MessageWrapper, ContentWrap, Avatar, MessageBlock, Date
};

