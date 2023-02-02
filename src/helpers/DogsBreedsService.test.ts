
import { getAllBreeds, getImageBreeds } from "./DogsBreedsService";
import { describe, it, expect, vi } from 'vitest';
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

describe('given the service getAllBreeds', () => {
    mockedAxios.get.mockResolvedValueOnce({
         data: mockedBreeds
     })
    it('it should return an object with a list of breeds', async () => {
        //act
        const result = await getAllBreeds();
        //expect
        expect(result).toHaveProperty('message');
        expect(result.message).toHaveProperty('bulldog', [
            "boston",
            "english",
            "french"
        ]);
    });
});

describe('given the service getImageBreeds', () => {
    mockedAxios.get.mockResolvedValueOnce({
        data: mockedImages
    })
    it('it should return an object with a list of breeds', async () => {
        //act
        const result = await getImageBreeds('bulldog');
        //assert
        expect(result.message).toContain('https://images.dog.ceo/breeds/bulldog-boston/20200710_175933.jpg');
    });
});