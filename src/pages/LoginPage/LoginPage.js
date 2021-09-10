import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { Login } from "../../services/api";
import { FormContainer, TrackItLogo, Button, Input } from "../../styles/LoginAndRegisterStyles";
import { UserContext } from "../../contexts/UserContext";


const LoginPage = () => {

  const { setUser } = useContext(UserContext);

  const history = useHistory();
  const [isActive, setIsActive] = useState(true);
  const [inputFields, setInputFields] = useState("");

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value })
  }

  const enter = () => {
    setIsActive(false);

    if (!inputFields.email || !inputFields.password) {
      setIsActive(true);
      return alert("Por favor, preencha os campos.");
    }

    const body = inputFields;

    Login(body)
      .then((response) => {
        setUser(response.data);
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

      <div>
        <Input
          active={isActive}
          type="text"
          placeholder="email"
          onChange={handleChange}
          name="email" />
        <Input
          active={isActive}
          type="password"
          placeholder="senha"
          onChange={handleChange}
          name="password" />
        <Button active={isActive} onClick={enter}>
          {
            isActive
              ? "Entrar"
              : <Loading visible={isActive} />
          }
        </Button>
      </div>

      <Link to="/cadastro">
        <span>
          Não tem uma conta? Cadastre-se!
        </span>
      </Link>
    </FormContainer>
  );
}

export { LoginPage }