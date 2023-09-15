const FetchMovies = async () => {
    const url = import.meta.env.VITE_APP_API_KEY;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
    };
    const data = await fetch(url, options);
    const sliceData = await data.json()
    const result = sliceData?.results?.slice(0, 10);
    return result;
}

export const FetchMovie = async (id) => {
    const appendurl = "?&append_to_response=videos"
    const url = import.meta.env.VITE_APP_API_KEY_MOVIE + id + appendurl;
    console.log(url)
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_APP_API_TOKEN
    }
    };
    const data = await fetch(url, options);
    const sliceData = await data.json()
    const result = sliceData;
    console.log(result)
    return result;
}
 
export default FetchMovies;