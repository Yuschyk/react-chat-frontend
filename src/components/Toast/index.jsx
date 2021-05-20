import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid'

import { NotificationContainer, Notification, ImgWrap, Img, ContentWrap, NoticeTitle,NoticeMessage, CloseButton} from './styled';
import { deleteNotice } from '../../App/actions';


 const Notice = ({id,type, message}) => {
   const dispatch = useDispatch();
   let title;
   if(type === 'success'){
     title = 'Успех!';
   } else {
     title = 'Ошибка!';
   }

   const onDeleteNotice = (id) =>{
    dispatch(deleteNotice(id));
   }

  return(
    <Notification>
      <CloseButton
      onClick={()=>{
        onDeleteNotice(id);
      }}
      />
      <ImgWrap>
        <Img/>
      </ImgWrap>
      <ContentWrap>
        <NoticeTitle>
          {title}
        </NoticeTitle>
        <NoticeMessage>
          {message}
        </NoticeMessage>
      </ContentWrap>
    </Notification>
  )
 }


const Toast = ({ type, message }) => {
  const dispatch = useDispatch();
  const notificationList = useSelector(state => state.app.notificationList);

  const OnDeleteMessage = (id) => {
    dispatch(deleteNotice(id));
  }



  return(
  <NotificationContainer>
    {
      notificationList.map((elem) => {
        return(
        <Notice
          id={elem.id}
          type={elem.type}
          message={elem.message}
        />
        )
      })
    }


    {/*<Notification id={nanoid(3)}>*/}
    {/*<CloseButton/>*/}
    {/*<ImgWrap>*/}
    {/*  <Img/>*/}
    {/*</ImgWrap>*/}
    {/*<ContentWrap>*/}
    {/*  <NoticeTitle>*/}
    {/*  {title}*/}
    {/*  </NoticeTitle>*/}
    {/*  <NoticeMessage>*/}
    {/*    Регистрация прошла успешно:)*/}
    {/*  </NoticeMessage>*/}
    {/*</ContentWrap>*/}
    {/*</Notification>*/}

  </NotificationContainer>
)
}

export {
  Toast
}
