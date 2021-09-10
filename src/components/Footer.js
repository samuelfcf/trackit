import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HabitsContext } from "../contexts/HabitsContext";

const Footer = () => {

  const { habitsStatus, setHabitsStatus } = useContext(HabitsContext);


  return (
    <FooterCard>
      <Link to="/habitos">
        <span>Hábitos</span>
      </Link>

      <div>
        <CircularProgressbar
          text={"Hoje"}
          value={habitsStatus}
          styles={buildStyles({
            pathColor: "#FFFFFF",
            textColor: "#FFFFFF",
            trailColor: "#52B6FF",
            textSize: "20px"
          })} />
      </div>

      <Link to="/historico">
        <span>histórico</span>
      </Link>
    </FooterCard>
  )
}

const FooterCard = styled.footer`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  z-index: 1;

  div {
    width: 91px;
    margin-bottom: 50px;
    background-color: #52B6FF;
    border-radius: 50%;
    padding: 5px;
  }

  span {
    color: #52B6FF;
    font-size: 18px;
  }
`

export { Footer }