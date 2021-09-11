import { useState } from "react";
import { WeekdayBtnStyled } from "./HabitsPageStyles";

const WeekdayButton = ({ day, value, btnSelected, name, handleClick }) => {

  const [selected, setSelected] = useState(btnSelected);

  const selectThisDay = (event) => {
    setSelected(!selected);
    handleClick(event, value);
  }

  return (
    <WeekdayBtnStyled
      selected={selected}
      day={day}
      value={value}
      name={name}
      onClick={(event) => selectThisDay(event, value)}>
      {day}
    </WeekdayBtnStyled>
  )
}

export { WeekdayButton }