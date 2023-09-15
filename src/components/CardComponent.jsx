import Movie_poster from '../assets/Movie_Poster.png'


const CardComponet = () => {
    return ( 
        <>
            <div className='card_component'>
                <img src={Movie_poster} alt="Movie_poster" />
            </div>
        </>
     );
}
 
export default CardComponet;