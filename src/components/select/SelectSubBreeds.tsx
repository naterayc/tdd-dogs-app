import React, { useState } from "react";

export const SelectSubBreeds = ({
  subBreeds,

  handleChangeSubBreed,
}: SelectSubBreedsProps) => {
  return (
    <>
      <select name="" id="" onChange={handleChangeSubBreed}>
        <option value="">subrazas</option>
        {subBreeds && subBreeds.length ? (
          subBreeds.map((subBreed, index) => {
            return <option key={index}>{subBreed}</option>;
          })
        ) : (
          <option>No hay subrazas :/</option>
        )}
      </select>
    </>
  );
};
interface SelectSubBreedsProps {
  subBreeds?: string[];

  handleChangeSubBreed: (e: any) => void;
}
