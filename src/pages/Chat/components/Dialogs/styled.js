import styled from 'styled-components';
import dialogsIcon from '../../../../assets/images/dialogsIcon.png';
import createDialog from '../../../../assets/images/createDialog.png';
import searchIcon from '../../../../assets/images/searchIcon.png';

export const DialogsContainer = styled.div`
  max-width: 320px;
  width: 100%;
  height: 100%;
  border-right: 2px solid #F7F7F7;
  cursor: pointer;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #F7F7F7;
`;

export const HeaderTitle = styled.h2`
  color: rgba(32, 32, 32, 0.65);
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  padding-left: 25px;
  background-image: url(${dialogsIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left center;
`;

export const CreateDialogBtn = styled.button`
  width: 18px;
  height: 18px;
  border: 0;
  background-image: url(${createDialog});
  background-color: #ffffff;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;


export const SearchWrap = styled.div`
padding: 0 18px;
  margin-top: 22px;
  margin-bottom: 25px;
  width: 100%;
`

export const Search = styled.input`
background-color: #F7F8F9;
  font-size: 14px;
  line-height: 16px;
  color: rgba(32, 32, 32, 0.65);
  border: 0;
  padding: 11px;
  width: 100%;
  text-indent: 37px;
  background-image: url(${searchIcon});
  background-size: 16px;
  background-position: 15px center;
  background-repeat: no-repeat;
`

export const DialogList = styled.div`
  max-height: calc(100vh - 60px - 85px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  &::-webkit-scrollbar-button {
    width: 3px;
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d7d7d7;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #d7d7d7;
  }
`
