import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

it("it should renders", () => {
  //arrange
  const container = render(<Container />);
  //act
  const defaut = screen.getByText("Elige una raza");
  screen.debug();
  //assert
  expect(container).toBeDefined();
  expect(defaut).toBeInTheDocument();
});
