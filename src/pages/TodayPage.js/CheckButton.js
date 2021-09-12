import { CheckButtonStyled } from "./TodayPageStyles";
import Checkmark from "../../assets/checkmark.svg";
import { useState } from "react";

const CheckButtonnn = ({ habit, checkHabit }) => {

  const [check, setCheck] = useState(habit.done)

  const checkThisHabit = () => {
    setCheck(!check);
    checkHabit(habit);
  }

  return (
    <CheckButtonStyled done={check} onClick={checkThisHabit}>
      <img src={Checkmark} alt="" />
    </CheckButtonStyled>
  )
}

export { CheckButtonnn };