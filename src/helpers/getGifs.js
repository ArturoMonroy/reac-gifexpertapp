
export const getGifs = async (category) => {

    const apiKey = 'bCEvlhqahDLLy3qdEGiCGK0WIUDd41gt';
    const limit = 10;
    const pattern = encodeURI(category);


    const url = `https://api.giphy.com/v1/gifs/search?q=${pattern}&limit=${limit}&api_key=${apiKey}`

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs
}