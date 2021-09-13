import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { LogIn } from "../../services/api";
import { FormContainer, TrackItLogo, Button, Input } from "../../styles/LoginAndRegisterStyles";
import { UserContext } from "../../contexts/UserContext";


const LoginPage = () => {

  const { setUser } = useContext(UserContext);

  const history = useHistory();
  const [isActive, setIsActive] = useState(true);
  const [inputFields, setInputFields] = useState("");

  const checkToken = () => {
    const userLocalStorage = localStorage.getItem("user");

    if (userLocalStorage === null) {
      return
    } else {
      const user = JSON.parse(userLocalStorage);
      setUser(user);
      history.push("/hoje")
    }
  }

  checkToken();

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value })
  }

  const enter = (event) => {
    event.preventDefault();
    setIsActive(false);
    const body = inputFields;

    LogIn(body)
      .then((response) => {
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        setIsActive(true);
        history.push("/hoje");
      })
      .catch(() => {
        setIsActive(true);
        alert("Não foi possível efetuar o login, por favor tente novamente.");
      });
  }

  return (
    <FormContainer>
      <TrackItLogo alt="logo" />

      <form onSubmit={enter}>
        <Input required
          active={isActive}
          type="text"
          placeholder="email"
          onChange={handleChange}
          name="email" />
        <Input required
          active={isActive}
          type="password"
          placeholder="senha"
          onChange={handleChange}
          name="password" />
        <Button active={isActive} type="submit">
          {
            isActive
              ? "Entrar"
              : <Loading visible={isActive} />
          }
        </Button>
      </form>

      <Link to="/cadastro">
        <span>
          Não tem uma conta? Cadastre-se!
        </span>
      </Link>
    </FormContainer>
  );
}

export { LoginPage }