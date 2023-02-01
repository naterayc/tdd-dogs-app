import axios from "axios";

const urlBase = "https://dog.ceo/api/";

export const getAllBreeds = async () => {
  return await axios.get(`${urlBase}breeds/list/all`)
    .then((response) => {
      return response;
    });
}

export const getImageBreeds = async (breed: string) => {
  return await axios.get(`${urlBase}breed/${breed}/images`)
    .then((response) => {
      return response;
    });
}
