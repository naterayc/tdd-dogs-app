import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Gallery } from "./Gallery";

describe("Given the Gallery component", () => {
  const dogImages = [
    "https://images.dog.ceo/breeds/bulldog-boston/20200710_175933.jpg",
    "https://images.dog.ceo/breeds/bulldog-boston/20200710_175944.jpg",
    "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10380.jpg",
    "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10452.jpg",
    "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10596.jpg",
    "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10604.jpg",
    "https://images.dog.ceo/breeds/bulldog-boston/n02096585_1069.jpg",
  ];

  it("it should renders a initial state in a text, when it  doesn't  receives data", () => {
    //arrange
    const gallery = render(<Gallery />);
    //act
    const initialState = screen.getByText("¡No hay perritos!");
    //asset
    expect(initialState).toBeInTheDocument();
  });

  it("it should renders a gallery of images, when it receives data", async () => {
    //arrange
    const gallery = render(
      <Gallery dogImages={dogImages} breedName={"bulldog"} />
    );
    //act
    const breedName = screen.getByText("bulldog");
    const imagenes = await screen.findAllByAltText("dog");
    //assert
    expect(gallery).toBeDefined();
    expect(breedName).toBeInTheDocument();
    expect(imagenes.length).toBe(7);
  });
});
