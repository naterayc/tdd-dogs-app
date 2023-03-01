import { useEffect, useState } from "react";
import { SelectBreeds } from "../select/SelectBreeds";
import { BreedsArray } from "../../helpers/DogsBreedsTransformer";
import { getSubBreeds } from "../../helpers/DogsBreedsService";
import { SelectSubBreeds } from "../select/SelectSubBreeds";

export const Container = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [subBreeds, setSubBreeds] = useState<string[]>([]);
  const [selectedSubBreed, setSelectedSubBreed] = useState("");

  const handleChangeBreeds = (e: any) => {
    console.log("click");
    const value = e.target.value;
    getSubBreeds(value).then((res) => {
      console.log("res", res);
      setSubBreeds(res.message);
    });
    setSelectedBreed(value);
    setSelectedSubBreed("");
  };

  const handleChangeSubBreed = (e: any) => {
    setSelectedSubBreed(e.target.value);
  };

  useEffect(() => {
    BreedsArray().then((res) => {
      setBreeds(res);
    });
  }, []);

  return (
    <div>
      {selectedBreed && (
        <h1>
          {selectedBreed}
          {selectedSubBreed && <span> - {selectedSubBreed}</span>}
        </h1>
      )}

      <SelectBreeds breeds={breeds} handleChangeBreeds={handleChangeBreeds} />

      <SelectSubBreeds
        subBreeds={subBreeds}
        handleChangeSubBreed={handleChangeSubBreed}
      />
    </div>
  );
};
