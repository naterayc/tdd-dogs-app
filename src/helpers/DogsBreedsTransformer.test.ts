import { describe, it, expect, vi } from 'vitest';
import { BreedsArray } from './DogsBreedsTransformer';
import { getAllBreeds } from './DogsBreedsService';

vi.mock('./DogsBreedsService');
const mockedGetAllBreeds = vi.mocked(getAllBreeds, true);

describe('given the BreedsArray function', () => {
    const mockedBreeds = {
        status: 'success',
        message: {
            affenpinscher: [],
            african: [],
            airedale: [],
            akita: [],
            appenzeller: [],
            australian: ['shepherd'],
            basenji: [],
            beagle: [],
            bluetick: [],
            borzoi: [],
            bouvier: [],
            boxer: [],
            brabancon: [],
            briard: [],
            buhund: ['norwegian'],
            bulldog: ['boston', 'english', 'french'],
            bullterrier: ['staffordshire'],
            cattledog: ['australian'],
            chihuahua: []
        }
    }

    it('it should return an array of breeds', async () => {
        //arrange
        mockedGetAllBreeds.mockResolvedValue(mockedBreeds);
        //act
        const result = await BreedsArray();
        console.log(result);
        //assert
        expect(result).toBeDefined()
    });
});