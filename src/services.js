import axios from "axios";

const baseURL = process.env.VUE_APP_API_URL;

export default axios.create({
  baseURL,
});

export function fetchCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}