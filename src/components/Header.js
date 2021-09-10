import styled from "styled-components";
import TrackIt from "../assets/TrackIt.svg"
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Header = () => {

  const { user } = useContext(UserContext);

  return (
    <HeaderCard>
      <TrackItWordMark alt="trackit" />
      <ProfileImage src={user.image} alt="" />
    </HeaderCard>
  );
}

const HeaderCard = styled.header`
  height: 70px;
  width: 100%;
  background-color: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`

const TrackItWordMark = styled.img`
  content: url(${TrackIt});
  width: 97px;
  height: 49px;
`

const ProfileImage = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
`

export { Header }