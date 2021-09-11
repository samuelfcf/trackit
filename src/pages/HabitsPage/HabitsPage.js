
import { useContext, useEffect, useState } from "react";
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { PageContent } from "../../styles/PageContentStyle";
import Delete from "../../assets/delete.png";
import { UserContext } from "../../contexts/UserContext";
import { MyHabitsCard, NewHabitButton, MessageCard, NewHabitCard, WeekdaysButtons, ActionButtons, HabbitCard, Button, WeekdayBtnStyled } from "./HabitsPageStyles";
import { createHabit, getHabits, deleteHabit } from "../../services/api";
import { WeekdayButton } from "./WeekdayButton";
import { SmallLoading } from "../../components/SmallLoading";

const HabitsPage = () => {

  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { user } = useContext(UserContext);

  const [habits, setHabits] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [newHabit, setNewHabit] = useState({
    name: "",
    days: []
  });

  useEffect(() => {
    getHabits(user.token)
      .then(response => setHabits(response.data))
  }, []);

  const handleChange = (event) => {
    setNewHabit({ ...newHabit, [event.target.name]: event.target.value })
  }

  const handleClick = (event, value) => {

    if (newHabit.days.includes(value)) {
      newHabit.days.splice(newHabit.days.indexOf(value), 1);
    } else {
      setNewHabit({ ...newHabit, [event.target.name]: [...newHabit.days, value] })
    }
  }

  const addNewHabit = () => {
    setIsActive(false)
    const body = newHabit;

    createHabit(body, user.token)
      .then(() => {
        setIsActive(true)
        getHabits(user.token)
          .then(response => setHabits(response.data));

        setNewHabit({
          name: "",
          days: []
        });
        setShowForm(!showForm);
      })
      .catch(() => {
        alert("Erro ao casdastrar hábito! Por favor tente novamente")
        setIsActive(true)
      })
  }

  const delHabit = (id) => {

    if (window.confirm("tem certeza que deseja excluir?")) {
      deleteHabit(id, user.token)
        .then((response) => {
          if (response.data != null) {
            habits.filter((habit) => habit.id !== id);
            getHabits(user.token)
              .then(response => setHabits(response.data))
          }
        })
    }
  }

  return (
    <>
      <Header />

      <PageContent >
        <MyHabitsCard>
          Meus Hábitos
          <NewHabitButton onClick={() => setShowForm(!showForm)}>+</NewHabitButton>
        </MyHabitsCard>

        {showForm
          ?
          <NewHabitCard isActive={isActive}>
            <input
              type="text"
              placeholder="nome do hábito"
              value={newHabit.name}
              name="name"
              onChange={handleChange} />

            <WeekdaysButtons>
              {weekdays.map((weekday, index) => (
                <WeekdayButton
                  day={weekday}
                  value={index}
                  btnSelected={false}
                  name="days"
                  handleClick={handleClick}>{weekday}</WeekdayButton>))}
            </WeekdaysButtons>

            <ActionButtons>
              <Button bgColor={"#FFFFFF"} color={"#52B6FF"} onClick={() => setShowForm(!showForm)}>Cancelar</Button>
              <Button bgColor={"#52B6FF"} color={"#FFFFFF"} onClick={addNewHabit}>{
                isActive ?
                  "Salvar" :
                  <SmallLoading />
              }</Button>
            </ActionButtons>
          </NewHabitCard>
          : ""}

        {habits.length === 0
          ?
          <MessageCard isHidden={false}>
            Você não tem nenhum hábito cadastrado ainda. Adicine um hábito para começar a trackear!
          </MessageCard>
          :
          habits.map((habit) => (
            <HabbitCard isHidden={false}>
              <img src={Delete} alt="" onClick={() => delHabit(habit.id)} />
              <span>{habit.name}</span>
              <WeekdaysButtons>
                {weekdays.map((weekday, index) => {
                  let selected = false
                  habit.days.forEach(day => day === index ? selected = true : selected)
                  return <WeekdayBtnStyled selected={selected}>{weekday}</WeekdayBtnStyled>
                })}
              </WeekdaysButtons>
            </HabbitCard>
          ))
        }

      </PageContent>

      <Footer />
    </>
  );
}


export { HabitsPage }