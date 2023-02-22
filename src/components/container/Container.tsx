import { useEffect } from "react";
import { Select } from "../select/Select";
import { BreedsArray } from "../../helpers/DogsBreedsTransformer";
import { useState } from "react";

export const Container = () => {
  const [breeds, setBreeds] = useState<string[]>([]);

  useEffect(() => {
    BreedsArray().then((res) => {
      setBreeds(res);
    });
  }, []);

  return <Select breeds={breeds} />;
};
