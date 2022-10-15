import axios from "axios";
const token = localStorage.getItem('token');

export const authAxios = axios.create({
  headers: {
    Authorization: `Bearer ${token}`
  }
});
