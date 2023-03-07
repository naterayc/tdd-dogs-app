import { Spinner } from './Spinner';
import { describe, it, expect } from "vitest";
import { render } from '@testing-library/react';

describe('Given the spinner component', () => {
    it('it should renders', () => {
        //arrange
        const spinner = render(<Spinner />)
        //act
        //assert
        expect(spinner).toBeDefined();
    })
})