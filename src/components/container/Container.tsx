import { useEffect, useState } from "react";
import { SelectBreeds } from "../select/SelectBreeds";
import { BreedsArray } from "../../helpers/DogsBreedsTransformer";
import { getSubBreeds } from "../../helpers/DogsBreedsService";
import { SelectSubBreeds } from "../select/SelectSubBreeds";
import { Gallery } from "../gallery/Gallery";
import { getImageBreeds } from "../../helpers/DogsBreedsService";

export const Container = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [subBreeds, setSubBreeds] = useState<string[]>([]);
  const [selectedSubBreed, setSelectedSubBreed] = useState("");
  const [imageBreeds, setImageBreeds] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleChangeBreeds = (e: any) => {
    const value = e.target.value;
    getSubBreeds(value).then((res) => {
      setSubBreeds(res.message);
    });

    getImageBreeds(value).then((img) => {
      setImageBreeds(imageBreeds.concat(img.message).reverse());
    });
    setSelected([...selected, value]);
    setSelectedBreed(value);
    setSelectedSubBreed("");
  };

  const handleChangeSubBreed = (e: any) => {
    const valueSubBreeds = e.target.value;
    setSelectedSubBreed(valueSubBreeds);
    let filter = imageBreeds.filter((img) => {
      return !img.includes(selectedBreed);
    });
    getImageBreeds(`${selectedBreed}/${valueSubBreeds}`).then((img) => {
      setImageBreeds(filter.concat(img.message).reverse());
    });
    let filterSelected = selected.filter((breed) => {
      return !breed.includes(selectedBreed);
    });
    setSelected([...filterSelected, `${selectedBreed} - ${valueSubBreeds}`]);
  };

  const HandleRemove = (dogs: string) => {
    let removeSelected = selected.filter((breed) => {
      return !breed.includes(dogs);
    });
    /*    let removeImages = imageBreeds.filter((img) => {
      return !img.includes(
        dogs
          .split("-")
          .map((elem) => elem.trim())
          .join("/")
      );
    }); */
    setSelected(removeSelected);
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

      <div>
        {selected.map((dogs) => {
          return (
            <p>
              {dogs}
              <span
                onClick={() => {
                  HandleRemove(dogs);
                }}
              >
                X
              </span>
            </p>
          );
        })}
      </div>

      <Gallery imageBreeds={imageBreeds} />
    </div>
  );
};
