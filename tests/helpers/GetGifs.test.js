import { GetGifs } from '../../src/helpers/GetGifs'

describe('Pruebas en getGifs', () => {

    const categry = 'Border Collie'

    test('Debe hacer match con el enapshot', async() => {
        const gifs = await GetGifs(categry)

        expect( gifs.length ).toBeGreaterThan(0)
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })

})