import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field } from 'formik';

const RegisterWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterBlock = styled.div`
  text-align: center;
  max-width: 430px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 7px;
`;

const Subtitle = styled.p`
  font-weight: 300;
  font-size: 18px;
  color: #202002;
  opacity: 0.5;
  margin-top: 0;
  margin-bottom: 50px;
`;

const FormWrap = styled.div`
  padding: 50px 45px 45px 45px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.042);
  border-radius: 3px;

`;


const AuthButton = styled.button`
  display: block;
  margin-top: 25px;
  margin-bottom: 30px;
  max-width: 340px;
  width: 100%;
  padding: 20px;
  background: #4CA5FF;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.1px;
  border-radius: 4px;
  border: 0;
`;

const AuthLink = styled(Link)`
  font-size: 16px;
  color: #ADADAD;
  text-decoration: none;
`;


export {
  RegisterWrap,
  RegisterBlock,
  Title,
  Subtitle,
  FormWrap,
  AuthButton,
  AuthLink
};
