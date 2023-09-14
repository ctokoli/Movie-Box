import MenuWithHero from "./HeroSection";
import FetchMovies from "../api/fetchMovies";
const HomePage = () => {
    FetchMovies();
    return ( 
        <>
            <MenuWithHero />
        </>
     );
}
 
export default HomePage;