import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { UserContext } from "../../contexts/UserContext";
import { PageContent } from "../../styles/PageContentStyle";

const TodayPage = () => {

  const history = useHistory();
  const { user } = useContext(UserContext);

  if (!user.token) {
    history.push("/");
  }

  return (
    <>
      <Header />
      <PageContent />
      <Footer />
    </>
  );
}

export { TodayPage };