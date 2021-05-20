import styled from 'styled-components';
import { Field } from 'formik';

const Input = styled(Field)`
  border: 1px solid ${props => (props.errors && props.touched) ? '#F44336' : (!props.errors && props.touched) ? '#70c040' : '#DDDDDD'};
  border-radius: 4px;
  font-size: 16px;
  line-height: 19px;
  padding: 18px;
  display: block;
  max-width: 340px;
  width: 100%;
  position: relative;
  
  &:-webkit-autofill{
    background-color: #ffffff!important;
  }
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
`;

const ErrorMessage = styled.div`
  position: absolute;
  font-size: 12px;
  text-align: center;
  color: #F44336;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export {
  Input,
  InputWrap,
  ErrorMessage
}
