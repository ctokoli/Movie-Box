import { useQuery } from "@tanstack/react-query";
import FetchMovies from "../api/fetchMovies";
import CardComponet from "./CardComponent";
import { IoIosArrowForward } from 'react-icons/io'

const HomeContent = () => {
    // eslint-disable-next-line no-unused-vars
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
                    <h4>See more  <IoIosArrowForward /> </h4>
                </div>
             <CardComponet />
                {/* {movies?.results?.map((movie) => (
                    <div key={movie.id}>
                    
                    </div>
                ))} */}
            </section>
        </>
     );
}
 
export default HomeContent;