import { useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { FormContainer, TrackItLogo, Button, Input } from "../../styles/LoginAndRegisterStyles";


const LoginPage = () => {

  const [isActive, setIsActive] = useState(true);

  return (
    <FormContainer>
      <TrackItLogo alt="logo" />

      <div>
        <Input active={isActive} type="text" placeholder="email" />
        <Input active={isActive} type="password" placeholder="senha" />
        <Button active={isActive}>
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