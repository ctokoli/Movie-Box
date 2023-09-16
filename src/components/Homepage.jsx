import MenuWithHero from "./HeroSection";
import FetchMovies from "../api/fetchMovies";
import FooterSection from "./FooterSection";

const HomePage = () => {
    FetchMovies();
    return ( 
        <>
          <MenuWithHero />
          <FooterSection />
        </>
     );
}
 
export default HomePage;