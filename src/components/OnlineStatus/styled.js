import styled from 'styled-components';

export const StatusWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusDot = styled.div`
  width: 6px;
  height: 6px;
  background-color: ${props => props.isOnline ? '#00C980' : '#B9B9B9'};
  border-radius: 50%;
  margin-right: 5px;
`;

export const StatusText = styled.div`
  color: rgba(32, 32, 32, 0.4);
  font-size: 14px;
  line-height: 16px;
`;
