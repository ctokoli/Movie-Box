import logo from "../assets/tv_icon.png"
import menu_icon from "../assets/Menu_icon.png"
import imdb from "../assets/imdb.svg"
import tomato from "../assets/rotten_tomato.svg"
import play_icon from "../assets/Play_icon.png"

const MenuWithHero = () => {
    return (  
        <>
            <section className="hero-menu">
                <div className="container">
                    <menu className="menu">
                        <div className="logo">
                            <img src={logo} alt="logo"></img>
                            <h2>MovieBox</h2>
                        </div>
                        <div className="search">
                            <input type="input" placeholder="search"></input>
                        </div>
                        <div className="sign-in">
                            <h3>Sign in</h3>
                            <img src={menu_icon} alt="menu-icon"></img>
                        </div>
                    </menu>
                    <div className="hero-content">
                        <div className="description">
                            <h1>John Wick3 : <br/>Parabellum</h1>
                            <div className="rating">
                                <div className="imdb">
                                    <img src={imdb} alt="imdb"></img>
                                    <p>86.0 / 100</p>
                                </div>
                                <div className="tomato">
                                    <img src={tomato} alt="imdb"></img>
                                    <p>97%</p>
                                </div>
                            </div>
                            <div className="description-text">
                                <p>
                                   John Wick is on the run after killing a member of the international 
                                   assassins&apos; guild, and with a $14 million price tag on his head, 
                                   he is the target of hit men and women everywhere. 
                                </p>
                                <button className="playButton">
                                    <img src={play_icon} alt="play-icon"/>
                                    <p>WATCH TRAILER</p>
                                </button>
                            </div>
                        </div>
                        <div className="numbers">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default MenuWithHero;