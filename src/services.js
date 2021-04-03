import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
});

export function fetchCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}