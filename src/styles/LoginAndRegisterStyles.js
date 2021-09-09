import styled from "styled-components";
import Logo from "../assets/logo.svg";

const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 68px;
  gap: 33px;

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  span {
    text-align: center;
    font-size: 15px;
    text-decoration: underline;
    color: #52B6FF;
    line-height: 17px;
  }
`
const Button = styled.button`
  height: 45px;
  width: 303px;
  border: 0;
  border-radius: 5px;
  background-color: #52B6FF;
  color: #FFFFFF;
  font-size: 21px;
  font-weight: 500;
  opacity: ${({ active }) => active ? 1 : 0.6};
`

const Input = styled.input`
  
    height: 45px;
    width: 303px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    padding-left: 11px;
    color: ${({ active }) => active ? "#333" : "#AFAFAF"};
    background-color: ${({ active }) => active ? "#FFFFFF" : "#F2F2F2"};
  
    &::placeholder {
      color: #DBDBDB; 
    }
`

const TrackItLogo = styled.img`
  content: url(${Logo});
  height: 180px; 
`

export { FormContainer, TrackItLogo, Button, Input }