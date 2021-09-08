import styled from "styled-components";
import TrackIt from "../assets/TrackIt.svg"
import profile from "../assets/profile.svg";

const Header = () => {
  return (
    <HeaderCard>
      <TrackItWordMark alt="trackit" />
      <ProfileImage alt="" />
    </HeaderCard>
  );
}

const HeaderCard = styled.header`
  height: 70px;
  width: 100%;
  background-color: #126BA5;
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
  content: url(${profile});
  width: 51px;
  height: 51px;
  border-radius: 50%;
`

export { Header }