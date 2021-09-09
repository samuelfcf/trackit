
import { useState } from "react";
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { PageContent } from "../../styles/PageContentStyle";
import Delete from "../../assets/delete.png"
import { MyHabitsCard, NewHabitButton, MessageCard, NewHabitCard, WeekdaysButtons, WeekdayButton, ActionButtons, HabbitCard, Button } from "./HabitsPageStyles";

const HabitsPage = () => {

  const [showForm, setShowForm] = useState(true)
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <>
      <Header />

      <PageContent>
        <MyHabitsCard>
          Meus Hábitos
          <NewHabitButton onClick={() => setShowForm(!showForm)}>+</NewHabitButton>
        </MyHabitsCard>

        <NewHabitCard isHidden={showForm}>
          <input type="text" placeholder="nome do hábito" />
          <WeekdaysButtons>
            {weekdays.map((weekday) => (
              <WeekdayButton>{weekday}</WeekdayButton>
            ))}
          </WeekdaysButtons>
          <ActionButtons>
            <Button bgColor={"#FFFFFF"} color={"#52B6FF"}>Cancelar</Button>
            <Button bgColor={"#52B6FF"} color={"#FFFFFF"}>Salvar</Button>
          </ActionButtons>
        </NewHabitCard>

        <MessageCard isHidden={showForm}>
          Você não tem nenhum hábito cadastrado ainda. Adicine um hábito para começar a trackear!
        </MessageCard>

        <HabbitCard>
          <img src={Delete} alt="" />
          <span>Ler 1 capítulo de livro</span>
          <WeekdaysButtons>
            {weekdays.map((weekday) => (
              <WeekdayButton>{weekday}</WeekdayButton>
            ))}
          </WeekdaysButtons>
        </HabbitCard>
        <HabbitCard>
          <img src={Delete} alt="" />
          <span>Ler 1 capítulo de livro</span>
          <WeekdaysButtons>
            {weekdays.map((weekday) => (
              <WeekdayButton>{weekday}</WeekdayButton>
            ))}
          </WeekdaysButtons>
        </HabbitCard>

      </PageContent>

      <Footer />
    </>
  );
}


export { HabitsPage }