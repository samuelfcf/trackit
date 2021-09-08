import { Link } from "react-router-dom";
import { FormContainer, TrackItLogo } from "../../styles/LoginAndRegisterStyles";

const RegisterPage = () => {
  return (
    <FormContainer>
      <TrackItLogo />

      <div>
        <input type="text" placeholder="email"></input>
        <input type="password" placeholder="senha"></input>
        <input type="text" placeholder="nome"></input>
        <input type="text" placeholder="foto"></input>
        <button>Cadastrar</button>
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