import Loader from "react-loader-spinner"
import styled from "styled-components";

const Loading = () => {
  return (
    <LoaderCotainer>
      <Loader type="ThreeDots" color="#FFFFFF" height={70} width={70} />
    </LoaderCotainer >
  );
}

const LoaderCotainer = styled.div`
  left:50%;
  top:50%;
  position: relative;
  margin-left:-40px;
  margin-top:-40px;
`

export { Loading }