import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Search } from "./Search";

describe("app tests", () => {
  it("it should renders", () => {
    //arrange
    const search = render(<Search />);
    //act and assert
    expect(search).toBeDefined();
  });
});
