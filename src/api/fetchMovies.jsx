const FetchMovies = async () => {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjZlOGRlZWYyNmE4MTRhMjhmODgyOTk0Yjk2ODVjNCIsInN1YiI6IjVkYTg1YzEzOTQ0YTU3MDAxMzI1NzQxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K5nObkIBCf-4tfJF6YUJOx7GUMB1VvFgpJ7AyTmprsk'
    }
    };
    const data = await fetch(url, options);
    const result = await data.json()
    console.log(result);
}
 
export default FetchMovies;