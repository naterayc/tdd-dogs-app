import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Gallery } from "./Gallery";
import { dogImages } from "../../mocks/mocks";

describe("Given the Gallery component", () => {
  it("it should renders a initial state in a text, when it  doesn't  receives data", () => {
    //arrange
    render(<Gallery isLoading={false}/>);
    //act
    const initialState = screen.getByText("Busca tu perrito");
    //asset
    expect(initialState).toBeInTheDocument();
  });

  it("it should renders a gallery of images, when it receives data", async () => {
    //arrange
    const gallery = render(<Gallery isLoading={false} imageBreeds={dogImages} />);
    //act

    const imagenes = await screen.findAllByAltText("dog");
    //assert
    expect(gallery).toBeDefined();

    expect(imagenes.length).toBe(7);
  });
});
