import { useEffect, useState } from "react";
import { SelectBreeds } from "../select/SelectBreeds";
import { BreedsArray } from "../../helpers/DogsBreedsTransformer";
import { getSubBreeds, getImageBreeds } from "../../helpers/DogsBreedsService";
import { SelectSubBreeds } from "../select/SelectSubBreeds";
import { Gallery } from "../gallery/Gallery";

export const Container = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [subBreeds, setSubBreeds] = useState<string[]>([]);
  const [selectedSubBreed, setSelectedSubBreed] = useState("");
  const [imageBreeds, setImageBreeds] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const handleChangeBreeds = (e: any) => {
    const value = e.target.value;
    setIsLoading(true);
    getSubBreeds(value).then((res) => {
      setSubBreeds(res.message);
    }).catch(error => {
      setIsLoading(false);
      console.error(error)
    });
    
    getImageBreeds(value).then((img) => {
      setImageBreeds(imageBreeds.concat(img.message).reverse());
      setTimeout(() => { setIsLoading(false) }, 1500);
    }).catch(error => {
      setIsLoading(false);
      console.error(error)
    });
    setSelected([...selected, value]);
    setSelectedBreed(value);
    setSelectedSubBreed("");
  };

  const handleChangeSubBreed = (e: any) => {
    const valueSubBreeds = e.target.value;
    setSelectedSubBreed(valueSubBreeds);
    setIsLoading(true);
    let filter = imageBreeds.filter((img) => {
      return !img.includes(selectedBreed);
    });
    getImageBreeds(`${selectedBreed}/${valueSubBreeds}`).then((img) => {
      setImageBreeds(filter.concat(img.message).reverse());
      setTimeout(() => { setIsLoading(false) }, 1500);
    }).catch(error => {
      setIsLoading(false);
      console.error(error)
    });
    let filterSelected = selected.filter((breed) => {
      return !breed.includes(selectedBreed);
    });
    setSelected([...filterSelected, `${selectedBreed} - ${valueSubBreeds}`]);
  };

  const HandleRemove = (dogs: string) => {
    setIsLoading(false)
    let removeSelected = selected.filter((breed) => {
      return !breed.includes(dogs);
    });
    let removeImages = imageBreeds.filter((img) => {
      return !img.includes(dogs.split(' ').join(''));
    });
    setSelected(removeSelected);
    setImageBreeds(removeImages);
  };

  useEffect(() => {
    setIsLoading(true);
    BreedsArray().then((res) => {
      setBreeds(res);
      setTimeout(() => { setIsLoading(false) }, 1500);
    }).catch(error => {
      setIsLoading(false);
      console.error(error)
    });
  }, []);

  return (
    <div>
      <SelectBreeds breeds={breeds} handleChangeBreeds={handleChangeBreeds} />

      <SelectSubBreeds
        subBreeds={subBreeds}
        handleChangeSubBreed={handleChangeSubBreed}
      />

      <div>
        {selected.map((dogs) => {
          return (
            <p key={dogs}>
              {dogs}
              <span data-testid='delete-icon'
                onClick={() => {
                  HandleRemove(dogs);
                }}
              >
                {' '}X
              </span>
            </p>
          );
        })}
      </div>

      <Gallery imageBreeds={imageBreeds} isLoading={isLoading} />
    </div>
  );
};
