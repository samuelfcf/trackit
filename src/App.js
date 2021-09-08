import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/cadastro" exact component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
