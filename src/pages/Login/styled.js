import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field } from 'formik';

const LoginWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginBlock = styled.div`
  text-align: center;
  max-width: 430px;
  width: 100%;
`

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

const Input = styled(Field)`
  border: 1px solid ${props => (props.errors && props.touched) ? '#F44336' : (!props.errors && props.touched) ? '#70c040' : '#DDDDDD'};
  border-radius: 4px;
  font-size: 16px;
  line-height: 19px;
  padding: 18px;
  display: block;
  max-width: 340px;
  width: 100%;
`;


const InputWrap = styled.div`
position: relative;
  margin-bottom: 5px;
  padding-bottom: 18px;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% - 10px));
    right: 20px;
    background-image: url(${props => (props.errors && props.touched) ? '/public/failed-validation.png'
            : (!props.errors && props.touched) ? '/public/success-validation.png'
            : 'none'});
    width: 20px;
    height: 20px;
    display: block;
    background-size: contain;
    z-index: 2;
  }
`

const ErrorMessage = styled.div`
position: absolute;
  font-size: 12px;
  text-align: center;
  color: red;
  bottom: 0;
  left: 0;
  width: 100%;
`

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
  LoginWrap,
  LoginBlock,
  Title,
  Subtitle,
  FormWrap,
  Input,
  AuthButton,
  AuthLink
}
