import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HabitsPage } from "./pages/HabitsPage/HabitsPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { TodayPage } from "./pages/TodayPage.js/TodayPage";
import { GlobalStyle } from "./styles/global";
import { UserContext } from "./contexts/UserContext";
import { HabitsContext } from "./contexts/HabitsContext";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { useState } from "react";


function App() {

  const [user, setUser] = useState("");
  const [habitsStatus, setHabitsStatus] = useState(0);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <HabitsContext.Provider value={{ habitsStatus, setHabitsStatus }}>
              <Route path="/cadastro" exact component={SignUpPage} />
              <Route path="/habitos" exact component={HabitsPage} />
              <Route path="/hoje" exact component={TodayPage} />
              <Route path="/historico" exact component={HistoryPage} />
            </HabitsContext.Provider>
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
