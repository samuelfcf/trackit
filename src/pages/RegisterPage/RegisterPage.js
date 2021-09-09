import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { FormContainer, TrackItLogo, Button, Input } from "../../styles/LoginAndRegisterStyles";

const RegisterPage = () => {

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
    if (!inputFields.email.includes("@") || inputFields.password.length < 10 || !inputFields.name || !validateURL(inputFields.image)) {
      return alert("Falha ao cadastrar, por favor preenchar os campos corretamente.");
    }

    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", inputFields)
      .then(
        history.push("/")
      )
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
              ? "Entrar"
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

export { RegisterPage }