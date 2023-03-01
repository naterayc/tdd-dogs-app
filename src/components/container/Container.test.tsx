import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { Container } from "./Container";
import axios from "axios";
import { mockedBreeds, mockedSubBreeds } from "../../mocks/mocks";
import { unmountComponentAtNode } from "react-dom";

vi.mock("axios");
const mockedAxios = vi.mocked(axios, true);

describe("it should renders  a Container Components", () => {
  let container: any = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    mockedAxios.mockClear();
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    mockedAxios.mockClear();
  });

  it("it should renders a list of breeds", async () => {
    //arrange
    mockedAxios.get.mockResolvedValueOnce({
      data: mockedBreeds,
    });

    //act
    await act(async () => {
      render(<Container />, container);
    });
    const defaut = screen.getByText("Elige una raza");

    //assert
    expect(defaut).toBeInTheDocument();
  });

  it("Should display a list of breeds, and  a list of sub breeds when selecting a race with with sub breeds", async () => {
    //arrange
    mockedAxios.get
      .mockResolvedValueOnce({
        data: mockedBreeds,
      })
      .mockResolvedValueOnce({
        data: mockedSubBreeds,
      });

    //act
    await act(async () => {
      render(<Container />, container);
    });

    const selectBreed = screen.getByTestId("selectBreed") as HTMLSelectElement;
    const breedOption = screen.getByRole("option", {
      name: "bulldog",
    }) as HTMLOptionElement;
    await act(async () => {
      fireEvent.change(selectBreed, { target: { value: "bulldog" } });
    });

    const selectSubBreed = screen.getByTestId(
      "selectSubBreed"
    ) as HTMLSelectElement;
    const subBreedOption = screen.getByRole("option", {
      name: "boston",
    }) as HTMLOptionElement;
    await act(async () => {
      fireEvent.change(selectSubBreed, { target: { value: "boston" } });
    });

    console.log("select", selectSubBreed.value);
    screen.debug();
    //assert
    expect(breedOption).toBeInTheDocument();
    expect(selectBreed).toBeInTheDocument();
    expect(selectBreed.value).toBe("bulldog");

    expect(subBreedOption).toBeInTheDocument();
    expect(selectSubBreed.value).toBe("boston");
  });
});
