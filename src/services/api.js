import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const SignUp = async (body) => {
  const promise = await axios.post(`${BASE_URL}/auth/sign-up`, body)
  return promise;
}

const LogIn = async (request) => {
  const body = {
    email: request.email,
    password: request.password
  }

  const promise = axios.post(`${BASE_URL}/auth/login`, body);
  return promise;
}

const getHabits = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}

const createHabit = async (request, token) => {
  const body = {
    name: request.name,
    days: request.days
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const promise = axios.post(`${BASE_URL}/habits`, body, config);
  return promise;
}

const deleteHabit = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const promise = axios.delete(`${BASE_URL}/habits/${id}`, config);
  return promise;
}

export { SignUp, LogIn, getHabits, createHabit, deleteHabit }