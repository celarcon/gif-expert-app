import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en <GiftItem />', () => {

    const title = 'Titulo de prueba'
    const url = 'https://media1.giphy.com/media/l0Hl6qQ7zQkIkIp2Q/200w.gif'
    test('Debe hacer match con el enapshot', () => {
        render ( <GifItem title={title} url={url}/>)

        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })

    test('Debe tener un titulo', () => {
        render ( <GifItem title={title} url={url}/>)
        
        expect(screen.getAllByText(title)).toBeTruthy()

    })
})