import { getAllBreeds } from "./DogsBreedsService";

export const BreedsArray = async () => {
    const breeds = await getAllBreeds();
    return Object.keys(breeds.message);
}