import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en <AddCategory />', () => {

    test('Input en AddCategory', () => {
        render ( <AddCategory setCategory={ () => ['border collie'] }/>)

        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: 'border collie' } })

        expect( input.value ).toBe('border collie')

    })

    test('Debe llamar setCategory si el imput tiene un valor', () => {

        const setCategory = jest.fn()
        const inputValue = 'border collie'
        render ( <AddCategory setCategory={ setCategory }/>)  

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.change(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect( input.value ).toBe('')
        expect( setCategory ).toHaveBeenCalled()
        expect( setCategory ).toHaveBeenCalledTimes(1)
        expect( setCategory ).toHaveBeenCalledWith(inputValue)

    })
})