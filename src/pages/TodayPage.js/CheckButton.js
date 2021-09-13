import { CheckButtonStyled } from "./TodayPageStyles";
import { useState } from "react";
import Checkmark from "../../assets/checkmark.svg";

const CheckButton = ({ habit, checkHabit }) => {

  const [check, setCheck] = useState(habit.done)

  const checkThisHabit = () => {
    setCheck(!check);
    checkHabit(habit);
  }

  return (
    <CheckButtonStyled done={check} onClick={checkThisHabit}>
      <img src={Checkmark} alt="checkmark-icon" />
    </CheckButtonStyled>
  )
}

export { CheckButton };