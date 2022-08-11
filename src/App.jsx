import { useState } from 'react'
import './App.css'

import { AddCategory, GifGrid } from './components'

export const App = () => {

  const [categories, setCategories] = useState(['Batman'])

  const setCategory = (inputValue) => {
    if(categories.includes(inputValue)) return
    setCategories([...categories, inputValue])
  }

  return (
    <div className="App">
      <AddCategory setCategory={setCategory}/>
      <ol>
        {categories.map((category) => 
          <GifGrid key={category} category={category}/>
        )}
      </ol>
    </div>
  )
}

