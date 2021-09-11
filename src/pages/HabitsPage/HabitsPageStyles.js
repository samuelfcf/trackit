import styled from "styled-components";

const MyHabitsCard = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color: #126BA5;
font-size: 1.438rem;
`

const NewHabitButton = styled.button`
width: 2.5rem;
height: 2.188rem;
border-radius: 5px;
background-color: #52B6FF;
color: #FFFFFF;
border: 0;
font-size: 1.875rem;
font-weight: 700;
`

const MessageCard = styled.div`
width: 21.125rem;
height: 4.625rem;
margin-top: 1.875rem;
font-size: 1.125rem;
color: #666666;
line-height: 1.375rem;
`

const NewHabitCard = styled.div`
width: 23.313rem;
height: 11.25rem;
border-radius: 5px;
background-color: #FFFFFF;
margin: 0 auto;
margin-top: 1.375rem;

input {
  margin: 1.125rem 1.125rem 0.5rem 1.125rem;
  width: 21.25rem;
  height: 2.813rem;
  border-radius: 5px;
  border: 1px solid #D4D4D4;
  color: ${({ isActive }) => isActive ? "#333" : "#B3B3B3"};
  background-color: ${({ isActive }) => isActive ? "white" : "#D4D4D4"};
  font-size: 1.25rem;
  font-weight: 500;
  padding-left: 0.688rem;
}

input::placeholder  {
  color: #DBDBDB; 
}
`

const WeekdaysButtons = styled.div`
margin: 0 1.125rem 0.5rem 1.125rem;
width: 21.25rem;
height: 1.875rem;
display: flex;
gap: 4px;
`

const ActionButtons = styled.div`
width: 21.25rem;
height: 1.875rem;
margin: 1.125rem 1.125rem 0.5rem 1.125rem;
display: flex;
justify-content: flex-end;
gap: 10px;
`

const HabbitCard = styled.div`
margin-top: 0.938rem;
width: 23.313rem;
height: 5.688rem;
background-color: #FFFFFF;
display: flex;
flex-direction: column;
gap: 10px;
border-radius: 5px;
position: relative;
display: "";

img {
  width: 0.938rem;
  height: 1.125rem;
  position: absolute;
  right: 0.938rem;
  top: 0.625rem;
}

span {
  margin: 0.625rem 1.125rem 0 1.125rem;
  width: 340px;
  color: #333;
  font-size: 1.25rem;
  font-weight: 500;
  color: #666666;
}
`

const WeekdayBtnStyled = styled.button`
height: 1.875rem;
width: 1.875rem;
color: ${({ selected }) => selected ? "#FFFFFF" : "#DBDBDB"};
font-size: 1.125rem;
font-weight: 600;
background-color: ${({ selected }) => selected ? "#CFCFCF" : "#FFFFFF"};
border: 1px solid #DBDBDB;
border-radius: 5px;
`

const Button = styled.button`
height: 2.188rem;
width: 5.25rem;
font-size: 1.125rem;
border: 0;
border-radius: 5px;
background-color: ${({ bgColor }) => bgColor};
color: ${({ color }) => color}
`
export { MyHabitsCard, NewHabitButton, MessageCard, NewHabitCard, WeekdaysButtons, ActionButtons, HabbitCard, Button, WeekdayBtnStyled }