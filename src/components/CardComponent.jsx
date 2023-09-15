/* eslint-disable react/prop-types */
import tomato from "../assets/rotten_tomato.svg"
import imdb from "../assets/imdb.svg"

const CardComponet = ({movie}) => {
    const imgURL = "http://image.tmdb.org/t/p/w500"
    const imgPoster = movie.poster_path
    let Movie_poster = imgURL + imgPoster;

    return ( 
        
        <>
            <div className='card_component'>
                <img src={Movie_poster} alt="Movie_poster"  className="poster_img"/>
                <div className='date'>
                <span>USA,</span><span>{movie.release_date.slice(0, 4)}</span>
                </div>
                <h3 className='title'>{movie.title}</h3>
                <div className="rating_home">
                    <div className="imdb">
                        <img src={imdb} alt="imdb"></img>
                        <p>86.0 / 100</p>
                    </div>
                    <div className="tomato">
                        <img src={tomato} alt="imdb"></img>
                        <p>97%</p>
                    </div>
                </div>
                <div className='genre'>
                    <span>Action</span><span>Adventure</span><span>Horror</span>
                </div>
            </div>
        </>
     );
}
 
export default CardComponet;