import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SelectBreeds } from "./SelectBreeds";
import { mockedBreeds, transformerBreeds } from "../../mocks/mocks";

describe("Given the Select component", () => {
  const handleChangeSubBreeds = vi.fn();
  it("it should renders", () => {
    //arrange
    const select = render(
      <SelectBreeds handleChangeBreeds={handleChangeSubBreeds} />
    );
    //act
    const defaut = screen.getByText("Elige una raza");
    //assert
    expect(select).toBeDefined();
    expect(defaut).toBeInTheDocument();
  });
  it("it should renders a list of options of breeds", () => {
    //arrange
    render(
      <SelectBreeds
        handleChangeBreeds={handleChangeSubBreeds}
        breeds={transformerBreeds}
      />
    );
    //act
    const breedOption = screen.getByText("bulldog");
    //assert
    expect(breedOption).toBeInTheDocument();
  });
});
