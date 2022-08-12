import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'


describe('Pruebas en useFetchGifs hook', () => {

    test('useFetchGifs probando hook al inicio', () => {

        const{ result } = renderHook( ()=> useFetchGifs('BORDER COLLIE'))
        const {images, isloading} = result.current

        expect(images.length).toBe(0)
        expect(isloading).toBeTruthy()
    })

    test('Debe retornar un arreglo de imagenes y isLoading en false', async() => {

        const{ result } = renderHook( ()=> useFetchGifs('BORDER COLLIE'))
       
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        )

        const {images, isloading} = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isloading).toBeFalsy()
    })
})