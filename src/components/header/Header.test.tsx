import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Given the header component", () => {
  it("it should renders", () => {
    //arrange
    const header = render(<Header />);
    //act
    const appName = screen.getByText("Dog Finder");
    //assert
    expect(header).toBeDefined();
    expect(appName).toBeInTheDocument();
  });
});
