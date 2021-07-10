import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const express = require("express");
const app = express();
app.use(express.json())

const cors = require("cors");
app.use(cors());

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = newObject => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

export default { getAll, create, update };
