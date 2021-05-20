import React from 'react';


import { DialogsContainer, Header, HeaderTitle, CreateDialogBtn, SearchWrap, Search, DialogList } from './styled';
import { Dialog } from './components/Dialog';

export const Dialogs = () => {

  return (
    <DialogsContainer>
      <Header>
        <HeaderTitle>
          Список диалогов
        </HeaderTitle>
        <CreateDialogBtn/>
      </Header>
      <div>
        <SearchWrap>
          <Search
            placeholder='Поиск среди контактов'
          />
        </SearchWrap>
        <DialogList>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
          <Dialog/>
        </DialogList>
      </div>
    </DialogsContainer>
  );
};
