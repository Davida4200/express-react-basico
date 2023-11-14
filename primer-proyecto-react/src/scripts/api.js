//Importación de Axios, es necesario instalar la dependencia
import axios from 'axios'

// URL en la que ejecutamos el backend construido
const URL_BASE = "http://localhost:3002";

export const getDatos = async () => {
  const respuesta = await axios.get(`${URL_BASE}/api/users`);
  return respuesta.data;
}

export const postDatos = async (url, datos) => {
  const respuesta = await axios.post(url, datos);
  return respuesta.data;
}