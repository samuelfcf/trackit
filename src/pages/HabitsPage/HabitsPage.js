import styled from "styled-components";
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

const HabitsPage = () => {
  return (
    <>
      <Header />
      <Body>
        Corpo da página
      </Body>
      <Footer />
    </>
  );
}

const Body = styled.div`
  background-color: #E5E5E5;
  height: 100vh;
  padding-top: 100px;
`


export { HabitsPage }