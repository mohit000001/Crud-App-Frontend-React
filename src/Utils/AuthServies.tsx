import axios from "axios";
import { User } from "./TypesInterfaces";
const BaseUrl = `${process.env.REACT_APP_API_ENDPOINT}:${process.env.REACT_APP_API_ENDPOINT_PORT}`;

const isUserLogined = async (token: string) => {
  let resMessage = false;
  try {
    const response = await axios.post(`${BaseUrl}/student`, token);
    if (response.data.status === "successfull") {
      resMessage = true;
    } else {
      resMessage = response.data.message;
    }
  } catch (error: any) {
    console.log(error.message);
    resMessage = error.message;
  }
  return resMessage;
};

const login = async (user: User) => {
  let resMessage = false;
  try {
    const response = await axios.post(`${BaseUrl}/auth/login`, user);
    if (response.data.status === "successfull") {
      if (response.data.token) {
        window.localStorage.setItem("loginToken", response.data.token);
        resMessage = true;
      } else {
        resMessage = response.data.message;
      }
    } else {
      resMessage = response.data.message;
    }
  } catch (error: any) {
    console.log(error.message);
    resMessage = error.message;
  }
  return resMessage;
};

export { isUserLogined, login };
