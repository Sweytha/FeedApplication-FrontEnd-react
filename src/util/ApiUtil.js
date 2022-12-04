import axios from "axios";
import { API_BASE_URL } from "../common/constants";
const frameToken = (token) => `Bearer ${token}`;

export const loginApi = async (username, password) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/login`;
    const apiResponse = await axios.post(url, { username, password });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }

};
export const signUpApi = async (
  username,
  name,
  emailId,
  phoneNumber,
  password
) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/signup`;
    const apiResponse = await axios.post(url, {
      username,
      name,
      emailId,
      phoneNumber,
      password,
    });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};