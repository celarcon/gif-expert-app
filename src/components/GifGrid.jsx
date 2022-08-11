import { GifItem } from "../components/GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
import  SvgComponent  from "../assets/spinner"

export const GifGrid = ({ category }) => {

    const { images, isloading } = useFetchGifs(category)

    return(
            <div className="card-grid">
                { isloading && <SvgComponent /> }
                <h2>{category}</h2>
                { images.map((image) =>  <GifItem key={image.id} {...image} />)}
            </div>
    )
}