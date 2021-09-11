import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { SignUp } from "../../services/api";
import { FormContainer, TrackItLogo, Button, Input } from "../../styles/LoginAndRegisterStyles";

const SignUpPage = () => {

  const history = useHistory();

  const [inputFields, setInputFields] = useState("");
  const [isActive, setIsActive] = useState(true);

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  }

  const register = (event) => {
    event.preventDefault();
    setIsActive(false);
    const body = inputFields;

    SignUp(body)
      .then(() => {
        setIsActive(true);
        history.push("/");
      })
      .catch(() => {
        setIsActive(true);
        alert("Não foi possível efetuar o login, por favor tente novamente.");
      });
  }

  return (
    <FormContainer>
      <TrackItLogo />

      <form onSubmit={register}>
        <Input required
          active={isActive}
          autoComplete="off"
          type="email"
          name="email"
          value={inputFields.email}
          placeholder="email"
          onChange={handleChange} />
        <Input required
          active={isActive}
          autoComplete="off"
          type="password"
          name="password"
          value={inputFields.password}
          placeholder="senha"
          onChange={handleChange} />
        <Input required
          active={isActive}
          autoComplete="off"
          type="text"
          name="name"
          value={inputFields.name}
          placeholder="nome"
          onChange={handleChange} />
        <Input required
          active={isActive}
          autoComplete="off"
          type="url"
          name="image"
          value={inputFields.image}
          placeholder="foto"
          onChange={handleChange} />
        <Button active={isActive} type="submit">
          {
            isActive
              ? "Cadastrar"
              : <Loading visible={isActive} />
          }
        </Button>
      </form>

      <Link to="/">
        <span>
          Já tem uma conta? Faça login
        </span>
      </Link>
    </FormContainer>
  );
}

export { SignUpPage }