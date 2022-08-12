import { fireEvent, render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {



    const category = 'BORDER COLLIE'

    test('GifGrid cargando', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isloading:true
        });

        render ( <GifGrid category={category}/>)

        expect( screen.getAllByTestId('loading'))

    })

    test('Debe mostrar las imagenes cuando se cargan usando el useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquier-cosa.jpg',
                title: 'Cualquier cosa'
            },
            {
                id: 'ASD',
                url: 'https://localhost/cualquier-cosa-2.jpg',
                title: 'Cualquier cosa 2'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isloading: false
        });

        render ( <GifGrid category={category}/>)

        expect( screen.getAllByRole('img').length).toBe(2)

    })


})