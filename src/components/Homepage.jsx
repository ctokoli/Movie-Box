import MenuWithHero from "./HeroSection";
import FetchMovies from "../api/fetchMovies";
import HomeContent from "./HomeContent";

const HomePage = () => {
    FetchMovies();
    return ( 
        <>
            <MenuWithHero />
            <HomeContent />
        </>
     );
}
 
export default HomePage;