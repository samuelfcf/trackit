import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const SignUp = async (body) => {
  const promise = await axios.post(`${BASE_URL}/auth/sign-up`, body)
  return promise;
}

export { SignUp }