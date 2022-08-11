import { useState } from "react"

export const AddCategory = ({ setCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setCategory(inputValue)
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar"
                value={inputValue}
                onChange={handleInputChange}/>
        </form>
    )
}