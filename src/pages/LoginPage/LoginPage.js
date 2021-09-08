import { Link } from "react-router-dom";
import { FormContainer, TrackItLogo } from "../../styles/LoginAndRegisterStyles";

const LoginPage = () => {
  return (
    <FormContainer>
      <TrackItLogo alt="logo" />

      <div>
        <input type="text" placeholder="email"></input>
        <input type="password" placeholder="senha"></input>
        <button>Entrar</button>
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