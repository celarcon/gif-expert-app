import { useEffect, useState } from "react"
import { GetGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isloading, setIsloading] = useState(true)

    const getImages = async () => {
        const newImages = await GetGifs(category)
        setImages(newImages)
        setIsloading(false)
    }

    useEffect( () => {
        getImages()
    },[category])

    return {
        images,
        isloading
    }
}