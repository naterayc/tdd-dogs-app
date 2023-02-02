import axios from "axios";

const urlBase = "https://dog.ceo/api/";

export const getAllBreeds = async () => {
  return (await axios.get(`${urlBase}breeds/list/all`)).data;
}

export const getImageBreeds = async (breed: string) => {
  return (await axios.get(`${urlBase}breed/${breed}/images`)).data;
}
