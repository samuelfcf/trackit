import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HabitsPage } from "./pages/HabitsPage/HabitsPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/cadastro" exact component={SignUpPage} />
          <Route path="/habitos" exact component={HabitsPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
