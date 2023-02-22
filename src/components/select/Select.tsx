import { useState, useEffect } from "react";
import { getSubBreeds } from "../../helpers/DogsBreedsService";
export const Select = ({ breeds }: SelectProps) => {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [subBreeds, setsubBreeds] = useState([]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    getSubBreeds(value).then((res) => {
      setsubBreeds(res.message);
    });
    setSelectedBreed(value);
  };

  return (
    <div>
      {selectedBreed && <h1>Raza seleccionada: {selectedBreed}</h1>}

      <select onChange={handleChange}>
        <option defaultValue={"Elige una raza"}>Elige una raza</option>
        {breeds && breeds.length ? (
          breeds.map((breed, index) => {
            return <option key={index}>{breed}</option>;
          })
        ) : (
          <option>No hay ningun perrito :/</option>
        )}
      </select>
      <select name="" id="">
        <option value="">subrazas</option>
        {subBreeds && subBreeds.length ? (
          subBreeds.map((subBreed, index) => {
            return <option key={index}>{subBreed}</option>;
          })
        ) : (
          <option>No hay subrazas :/</option>
        )}
      </select>
    </div>
  );
};

interface SelectProps {
  breeds?: string[];
}
