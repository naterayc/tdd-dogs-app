import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SelectSubBreeds } from "./SelectSubBreeds";

describe("Given the Select component", () => {
  const handleChange = vi.fn();

  it("it should renders a list of options of breeds", () => {
    //arrange
    render(<SelectSubBreeds handleChangeSubBreed={handleChange} />);
    //act
    //const breedOption = screen.getByText('Bulldog');
    //assert
    //expect(breedOption).toBeInTheDocument();
  });
});
