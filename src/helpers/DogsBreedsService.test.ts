
import { getAllBreeds, getImageBreeds } from "./DogsBreedsService";
import { describe, it, expect } from 'vitest';

describe('given the service getAllBreeds', () => {
    it('it should return an object with a list of breeds', async () => {
        //act
        await getAllBreeds()
            .then(data => {
                //assert
                expect(data).toHaveProperty('data');
                expect(data.data.message).toHaveProperty('bulldog', [
                    "boston",
                    "english",
                    "french"
                ]);
            })
    });
})

describe('given the service getImageBreeds', () => {
    it('it should return an object with a list of breeds', async () => {
        //act
        await getImageBreeds('bulldog')
            .then(data => {
                //assert
                expect(data.data.message).toContain('https://images.dog.ceo/breeds/bulldog-boston/20200710_175933.jpg');
            })
    });
})