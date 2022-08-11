
export const GetGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=jUbzsHDBbKMnvdEkEKaWSKNd5KojQ0PH`

    const options = {method: 'GET'}

    const data = await fetch(url, options)
        .then(response => response.json())
        .then(response => response.data)
        .catch(err => console.error(err))
    
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }))

    return gifs
}