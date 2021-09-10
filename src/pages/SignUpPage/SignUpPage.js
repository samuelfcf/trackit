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

  const validateURL = (url) => {
    const rule = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    return rule.test(url)
  }

  const register = () => {
    setIsActive(false);

    if (!inputFields.email.includes("@") || inputFields.password.length < 10 || !inputFields.name || !validateURL(inputFields.image)) {
      setIsActive(true);
      return alert("Falha ao cadastrar, por favor preenchar os campos corretamente.");
    }

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

      <div>
        <Input
          active={isActive}
          autoComplete="off"
          type="email"
          name="email"
          value={inputFields.email}
          placeholder="email"
          onChange={handleChange} />
        <Input
          active={isActive}
          autoComplete="off"
          type="password"
          name="password"
          value={inputFields.password}
          placeholder="senha"
          onChange={handleChange} />
        <Input
          active={isActive}
          autoComplete="off"
          type="text"
          name="name"
          value={inputFields.name}
          placeholder="nome"
          onChange={handleChange} />
        <Input
          active={isActive}
          autoComplete="off"
          type="text"
          name="image"
          value={inputFields.image}
          placeholder="foto"
          onChange={handleChange} />
        <Button active={isActive} onClick={register}>
          {
            isActive
              ? "Cadastrar"
              : <Loading visible={isActive} />
          }
        </Button>
      </div>

      <Link to="/">
        <span>
          Já tem uma conta? Faça login
        </span>
      </Link>
    </FormContainer>
  );
}

export { SignUpPage }