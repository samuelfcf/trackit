import styled from "styled-components";
import Logo from "../assets/logo.svg";

const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.25rem;
  gap: 2.063rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }

  span {
    text-align: center;
    font-size: 0.938rem;
    text-decoration: underline;
    color: #52B6FF;
    line-height: 1.063rem;
  }
`
const Button = styled.button`
  height: 2.813rem;
  width: 18.938rem;
  border: 0;
  border-radius: 5px;
  background-color: #52B6FF;
  color: #FFFFFF;
  font-size: 1.313rem;
  font-weight: 500;
  opacity: ${({ active }) => active ? 1 : 0.6};
`

const Input = styled.input`
  
    height: 2.813rem;
    width: 18.938rem;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 1.25rem;
    font-weight: 500;
    padding-left: 0.688rem;
    color: ${({ active }) => active ? "#333" : "#AFAFAF"};
    background-color: ${({ active }) => active ? "#FFFFFF" : "#F2F2F2"};
  
    &::placeholder {
      color: #DBDBDB; 
    }
`

const TrackItLogo = styled.img`
  content: url(${Logo});
  height: 11.25rem;
`

export { FormContainer, TrackItLogo, Button, Input }