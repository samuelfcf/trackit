import styled from "styled-components";


const TodayContainer = styled.div`
  font-size: 18px;
  color: #BABABA;
  margin-bottom: 25px;
  
  h1 {
    font-size: 23px;
    color: #126BA5;
    margin-bottom: 10px;
  }
`

const HabitContainer = styled.div`
  background-color: #FFFFFF;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 15px 13px 12px 13px;
  border-radius: 5px;
  margin-top: 10px;
`

const SequenceContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    display: flex;
    gap: 5px;
  }
`

const Sequence = styled.p`
  color: ${({ done }) => done ? "#8FC549" : "666666"}
`

const Record = styled.p`
  color: ${({ done }) => done ? "#8FC549" : "666666"}
`

const HabitInfoCard = styled.div`
  color: #666666;

  h2 {
    font-size: 20px;
    margin-bottom: 12px;
  }

  p {
    font-size: 15px;
    margin-bottom: 3px;
  }
`

const CheckButtonStyled = styled.button`
  height: 69px;
  width: 69px;
  border-radius: 5px;
  border: 0;
  background-color: ${({ done }) => done ? "#8FC549" : "#EBEBEB"}
`



export { TodayContainer, HabitInfoCard, HabitContainer, SequenceContainer, Sequence, Record, CheckButtonStyled }