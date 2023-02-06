import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Given the Card component", () => {
  it("it should renders", () => {
    //arrange
    const image = "https://images.dog.ceo/breeds/bulldog-boston/20200710_175933.jpg"
    const card = render(<Card image={image} />);
    //act
    const dogImg = screen.getByAltText('dog');
    //assert
    expect(card).toBeDefined();
    expect(dogImg).toBeInTheDocument();
  });
});
