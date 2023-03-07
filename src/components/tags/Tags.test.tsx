import { describe, it, expect, vi } from "vitest";
import { render } from '@testing-library/react';
import { Tags } from './Tags';

describe('Given the tag component', () => {
    it('it should renders', () => {
        //arrange
        //act 
        const tags = render(<Tags selected={['akita']} handleRemove={vi.fn()}/>)
        //assert
        expect(tags).toBeDefined();
    })
})