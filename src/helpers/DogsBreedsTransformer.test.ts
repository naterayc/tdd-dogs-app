import { mockedBreeds } from './../mocks/mocks';
import { describe, it, expect, vi } from 'vitest';
import { BreedsArray } from './DogsBreedsTransformer';
import { getAllBreeds } from './DogsBreedsService';

vi.mock('./DogsBreedsService');
const mockedGetAllBreeds = vi.mocked(getAllBreeds, true);

describe('given the BreedsArray function', () => {

    it('it should return an array of breeds', async () => {
        //arrange
        mockedGetAllBreeds.mockResolvedValue(mockedBreeds);
        //act
        const result = await BreedsArray();
        //assert
        expect(result).toBeDefined()
    });
});