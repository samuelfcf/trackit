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

  const promise = await axios.post(`${BASE_URL}/auth/login`, body);
  return promise;
}

const getHabits = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const promise = await axios.get(`${BASE_URL}/habits`, config);
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

  const promise = await axios.post(`${BASE_URL}/habits`, body, config);
  return promise;
}

const deleteHabit = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const promise = await axios.delete(`${BASE_URL}/habits/${id}`, config);
  return promise;
}

const getTodayHabits = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const promise = await axios.get(`${BASE_URL}/habits/today`, config);
  return promise
}

const checkHabitDone = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const promise = await axios.post(`${BASE_URL}/habits/${id}/check`, "", config);
  return promise;
}

const uncheckHabit = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const promise = await axios.post(`${BASE_URL}/habits/${id}/uncheck`, "", config);
  return promise;
}

export { SignUp, LogIn, getHabits, createHabit, deleteHabit, getTodayHabits, checkHabitDone, uncheckHabit }