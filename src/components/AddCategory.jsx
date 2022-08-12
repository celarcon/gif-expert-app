import { useState } from "react"
import PropTypes from "prop-types"

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
        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type="text"
                placeholder="Buscar"
                value={inputValue}
                onChange={handleInputChange}/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}