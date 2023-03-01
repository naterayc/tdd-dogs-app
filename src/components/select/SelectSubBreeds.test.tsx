import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SelectSubBreeds } from "./SelectSubBreeds";
import { mockedSubBreeds } from "../../mocks/mocks";

describe("Given the Select component", () => {
  const handleChangeSubBreeds = vi.fn();
  it("it should renders", () => {
    //arrange
    const select = render(
      <SelectSubBreeds handleChangeSubBreed={handleChangeSubBreeds} />
    );
    //act
    const defaut = screen.getByText("No hay subrazas :/");
    //assert
    expect(select).toBeDefined();
    expect(defaut).toBeInTheDocument();
  });
  it("it should renders a list of options of breeds", () => {
    //arrange
    render(
      <SelectSubBreeds
        handleChangeSubBreed={handleChangeSubBreeds}
        subBreeds={mockedSubBreeds.message}
      />
    );
    //act
    const subBreedOption = screen.getByText("boston");
    //assert
    expect(subBreedOption).toBeInTheDocument();
  });
});
