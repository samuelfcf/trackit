import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { UserContext } from "../../contexts/UserContext";
import { HabitsContext } from "../../contexts/HabitsContext";
import { getTodayHabits, checkHabitDone, uncheckHabit } from "../../services/api";
import { PageContent } from "../../styles/PageContentStyle";
import { TodayContainer, HabitInfoCard, HabitContainer, SequenceContainer, Sequence, Record } from "./TodayPageStyles";
import { CheckButton } from "./CheckButton";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";


const TodayPage = () => {

  const today = (dayjs().locale('pt-br').format('dddd, DD/MM'));
  const history = useHistory();

  const { user, setUser } = useContext(UserContext);
  const { habitsStatus, setHabitsStatus } = useContext(HabitsContext);
  const [todayHabits, setTodayHabits] = useState([]);

  if (!user.token) {
    history.push("/");
  }

  useEffect(() => {
    getTodayHabits(user.token)
      .then((response) => {
        const habits = response.data;
        setTodayHabits(habits);
      });
  }, []);

  const checkHabit = (habit) => {
    const progress = habitsStatus;
    const percentageFraction = parseFloat((100 / todayHabits.length).toFixed(2));

    if (!habit.done) {
      checkHabitDone(habit.id, user.token)
        .then(() => {
          const currentProgress = progress + percentageFraction;
          currentProgress > 99 ? setHabitsStatus(100) : setHabitsStatus(currentProgress);
          setUser({ ...user, currentProgress })
          getTodayHabits(user.token)
            .then((response) => {
              const habits = response.data;
              setTodayHabits(habits);
            });
        })
        .catch(error => console.log(error));
    }

    if (habit.done) {
      uncheckHabit(habit.id, user.token)
        .then(() => {
          const currentProgress = progress - percentageFraction;
          currentProgress < 1 ? setHabitsStatus(0) : setHabitsStatus(currentProgress);
          getTodayHabits(user.token)
            .then((response) => {
              const habits = response.data
              setTodayHabits(habits)
            });
        })
        .catch(error => console.log(error));
    }
  }

  return (
    <>
      <Header />

      <PageContent>
        <TodayContainer>
          <h1>{today}</h1>
          {habitsStatus === 0 ? "Nenhum hábito concluído" : `${habitsStatus}% dos hábitos concluídos`}
        </TodayContainer>

        {todayHabits.map((habit) => (
          <HabitContainer>
            <div>
              <HabitInfoCard>
                <h2>{habit.name}</h2>
                <SequenceContainer>
                  <p>
                    Sequência atual:
                    <Sequence done={habit.done ? true : false}>{habit.currentSequence} {habit.currentSequence === 1 ? "dia" : "dias"}</Sequence>
                  </p>
                  <p>
                    Seu recorde:
                    <Record done={(habit.highestSequence === habit.currentSequence && habit.highestSequence > 0) ? true : false}>{habit.highestSequence} {habit.highestSequence === 1 ? "dia" : "dias"}</Record>
                  </p>
                </SequenceContainer>
              </HabitInfoCard>
            </div>

            <CheckButton
              habit={habit}
              checkHabit={checkHabit}
            />
          </HabitContainer>
        ))}
      </PageContent>

      <Footer />
    </>
  );
}


export { TodayPage };