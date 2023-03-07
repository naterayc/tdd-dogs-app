import { getAllBreeds, getImageBreeds, getSubBreeds } from "./DogsBreedsService";
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { mockedBreeds, mockedSubBreeds, mockedError, mockedImages } from "../mocks/mocks";
import axios from "axios";

vi.mock("axios");
const mockedAxios = vi.mocked(axios, true);

describe('Given the getAllBreeds, getSubBreeds and getImageBreeds', () => {
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

    it('it should return a subBreeds, if a breeds', async () => {

        //arrange
        mockedAxios.get.mockResolvedValueOnce({
            data: mockedSubBreeds
        });
        //act
        const result = await getSubBreeds('bulldog');

        //assert
        expect(result.message).toContain('boston');

    })


});

