import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Given the Footer component", () => {
  it("it should renders", () => {
    //arrange
    const footer = render(<Footer />);
    //act
    const copyright = screen.getByText("2023 - By Yndi y Fabi");
    //assert
    expect(footer).toBeDefined();
    expect(copyright).toBeInTheDocument();
  });
});
