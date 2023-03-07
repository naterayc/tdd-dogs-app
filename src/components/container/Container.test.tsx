import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { Container } from "./Container";
import axios from "axios";
import { mockedBreeds, mockedImages, mockedSubBreeds } from "../../mocks/mocks";
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

  it("Should display a list of breeds, and  a list of sub breeds when selecting a breeds with with sub breeds", async () => {
    //arrange
    mockedAxios.get
      .mockResolvedValueOnce({
        data: mockedBreeds,
      })
      .mockResolvedValueOnce({
        data: mockedSubBreeds,
      })
      .mockResolvedValueOnce({
        data: mockedImages,
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
  
    //assert
    expect(breedOption).toBeInTheDocument();
    expect(selectBreed).toBeInTheDocument();
    expect(selectBreed.value).toBe("bulldog");

    expect(subBreedOption).toBeInTheDocument();
    expect(selectSubBreed.value).toBe("boston");
  });
  it('it should remove dogs when the icon x of a breed is clicked', async () => {
    //arrange
    mockedAxios.get
      .mockResolvedValueOnce({
        data: mockedBreeds,
      })
      .mockResolvedValueOnce({
        data: mockedSubBreeds,
      })
      .mockResolvedValueOnce({
        data: mockedImages,
      });

    //act
    await act(async () => {
      render(<Container />, container);
    });
    const selectBreed = screen.getByTestId("selectBreed") as HTMLSelectElement;
    await act(async () => {
      fireEvent.change(selectBreed, { target: { value: "bulldog" } });
    });

    const selectSubBreed = screen.getByTestId(
      "selectSubBreed"
    ) as HTMLSelectElement;
    await act(async () => {
      fireEvent.change(selectSubBreed, { target: { value: "boston" } });
    });

    const deleteIcon = screen.getByTestId("delete-icon") as HTMLSpanElement;
    await act(async () => {
      fireEvent.click(deleteIcon);
    });

    screen.debug();

    expect(screen.queryByTestId("container-img")).not.toBeInTheDocument();

  })
});
