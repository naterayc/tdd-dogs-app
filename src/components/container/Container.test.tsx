import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { Container } from "./Container";
import axios from "axios";
import { mockedBreeds, mockedSubBreeds } from "../../mocks/mocks";
import { unmountComponentAtNode } from "react-dom";

vi.mock("axios");
const mockedAxios = vi.mocked(axios, true);

describe("it should renders", () => {
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

  it("it should render a lis of subBreeds when a breed is selected", async () => {
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

    const idOption = screen.getByTestId("selectBreed") as HTMLSelectElement;
    const breedOption = screen.getByRole("option", { name: "bulldog" }) as HTMLOptionElement;
    await act(async() => {
      fireEvent.change(idOption, { target: { value: "bulldog" } });
    });
    
    //console.log("idOption", idOption.value);
    screen.debug();
    //assert
    expect(breedOption).toBeInTheDocument();
    expect(idOption).toBeInTheDocument();
    expect(idOption.value).toBe('bulldog');
  
  });
});
