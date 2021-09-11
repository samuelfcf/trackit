import Loader from "react-loader-spinner"
import styled from "styled-components";

const SmallLoading = () => {
  return (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#FFFFFF" height={70} width={70} />
    </LoaderContainer >
  );
}

const LoaderContainer = styled.div`
  left:25%;
  top:70%;
  position: relative;
  margin-left:-40px;
  margin-top:-40px;
`


export { SmallLoading }