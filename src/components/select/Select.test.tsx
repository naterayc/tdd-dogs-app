import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Select } from "./Select";

describe('Given the Select component', () => {
    it('it should renders', () => {
        //arrange
        const select = render(<Select />);
        //act
        const defaut = screen.getByText('Elige una raza');
        //assert
        expect(select).toBeDefined();
        expect(defaut).toBeInTheDocument();
    });
    it('it should renders a list of options of breeds', () => {
        //arrange
        render(<Select />);
        //act
        //const breedOption = screen.getByText('Bulldog');
        //assert
        //expect(breedOption).toBeInTheDocument();
    });
});