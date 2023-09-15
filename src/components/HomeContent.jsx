/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import FetchMovies from "../api/fetchMovies";
import CardComponet from "./CardComponent";
import { IoIosArrowForward } from 'react-icons/io'
import { NavLink } from 'react-router-dom';

const HomeContent = (search) => {
    const {status, error, data:movies, } = useQuery({
        queryKey: ["movies"],
        queryFn: FetchMovies
    })
    
    if(status === "loading") return <h2>Loading.....</h2>
    if(status === "error") return <h2>{JSON.stringify(error)}</h2>
    return ( 
        <>
            <section className="container">
                <div className="featured">
                    <h2>Featured Movies</h2>
                    <div className="see_more">
                        <h4>See more </h4>
                        <IoIosArrowForward  className="arrow"/>
                    </div>
                </div>
             <div className="card-content">
                {movies.filter((movie) => {
                    return search.search.toLowerCase() === '' ? movie 
                    : movie.title.toLowerCase().includes(search.search)
                }).map((movie) => (
                    <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                        <CardComponet movie={movie} />
                    </NavLink>
                    
                ))}
             </div>
            </section>
        </>
     );
}
 
export default HomeContent;