const FetchMovies = async () => {
    const url = import.meta.env.VITE_APP_API_KEY;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
    };
    const data = await fetch(url, options);
    const result = await data.json()
    return result;
}
 
export default FetchMovies;