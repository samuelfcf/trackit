import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header"
import { UserContext } from "../../contexts/UserContext";
import { PageContent } from "../../styles/PageContentStyle";

const HistoryPage = () => {

  const history = useHistory();
  const { user } = useContext(UserContext);

  if (!user.token) {
    history.push("/");
  }

  return (
    <>
      <Header />
      <PageContent>
        <Title>
          Histórico
        </Title>

        <Subtitle>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </Subtitle>
      </PageContent>
      <Footer />
    </>
  );
}

const Title = styled.h1`
  font-size: 1.563rem;
  margin-bottom: 1.25rem;
  color: #126BA5;
`

const Subtitle = styled.h3`
  font-size: 1.188rem;
  color: #666666;
`

export { HistoryPage }
