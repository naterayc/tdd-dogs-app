
import { getAllBreeds, getImageBreeds } from "./DogsBreedsService";
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import axios from "axios";

vi.mock("axios");
const mockedAxios = vi.mocked(axios, true);

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

const mockedError = {
    status: 500,
    statusText: 'Internal server error'
}

const mockedImages = {
    status: 'success',
    message: [
        'https://images.dog.ceo/breeds/bulldog-boston/20200710_175933.jpg',
        'https://images.dog.ceo/breeds/bulldog-boston/20200710_175944.jpg',
        'https://images.dog.ceo/breeds/bulldog-boston/n02096585_10380.jpg',
        'https://images.dog.ceo/breeds/bulldog-boston/n02096585_10452.jpg',
        'https://images.dog.ceo/breeds/bulldog-boston/n02096585_10596.jpg',
        'https://images.dog.ceo/breeds/bulldog-boston/n02096585_10604.jpg',
        'https://images.dog.ceo/breeds/bulldog-boston/n02096585_1069.jpg'
    ]
}

describe('Given the getAllBreeds and getImageBreeds', () => {
    afterEach(() => { mockedAxios.mockClear() });
    beforeEach(() => { mockedAxios.mockClear() });
    it('it should return an object with a list of breeds', async () => {
        //arrange
        mockedAxios.get.mockResolvedValueOnce({
            data: mockedBreeds
        });
        //act
        const result = await getAllBreeds();
        //assert
        expect(result).toHaveProperty('message');
        expect(result.message).toHaveProperty('bulldog', [
            "boston",
            "english",
            "french"
        ]);
    });

    it('it should return an object with a list of images of the breed', async () => {
        //arrange 
        mockedAxios.get.mockResolvedValueOnce({
            data: mockedImages
        });
        //act
        const result = await getImageBreeds('bulldog');
        //assert
        expect(result.message).toContain('https://images.dog.ceo/breeds/bulldog-boston/20200710_175933.jpg');
    });

    it('it should return an error when the service is unavailable', async () => {
        //arrange
        mockedAxios.get.mockResolvedValueOnce({
            data: mockedError
        });
        //act
        const result = await getAllBreeds();
        //assert
        expect(result).not.toHaveProperty('message');
        expect(result.status).toBe(500);
        expect(result.statusText).toBe('Internal server error');
    });
});

