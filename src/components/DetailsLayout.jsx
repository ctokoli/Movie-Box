import SideBar from "./SideBar";
import Trailer_img from "../assets/trailer.png"
import { AiFillStar } from 'react-icons/ai'
import { IoTicketOutline } from 'react-icons/io5'
import { BsListUl } from 'react-icons/bs'

const DetailsLayout = () => {
    return ( 
        <>
          <div>
            <div className="details-page">
                <SideBar />
                <section className="details-content">
                   <div className="trailer">
                    <img src={Trailer_img} alt="trailer movie" />
                   </div>
                   <div className="media_info">
                    <div className="movie_title">
                        <span>Top Gun: Maverick </span> 
                        <span>• </span>
                        <span>2022</span>
                        <span> • </span>
                        <span>PG-13</span> 
                        <span>• </span>
                        <span>2h 10m</span>
                        <button className="btn-genre">Action</button>
                        <button className="btn-genre">Drama</button>
                    </div>
                    <div className="movie_rating">
                         <AiFillStar className="star_icon" />
                         <span className="rating_no">8.5</span>
                         <span className="rating_">|</span>
                         <span className="rating_">350k</span>
                    </div>
                   </div>
                   <div className="movie_contents_info">
                    <div className="movie_contents">
                     <p>After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                        but must confront ghosts of his past when he leads TOP GUN&apos;s elite graduates
                         on a mission that demands the ultimate sacrifice from those chosen to fly it.
                      </p>
                      <div className="producers">
                        <p>Director : <span className="p-text">Joseph Kosinski</span></p>
                        <p>Writers : <span className="p-text">Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
                        <p>Stars : <span className="p-text">Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                      </div>
                    </div>
                    <div className="contents_btn">
                        <button className="show_btn">
                        <IoTicketOutline className="ticket_icon" />
                         <p>See Showtimes</p></button>
                        <button className="more_btn">
                        <BsListUl className="list_icon" />
                         <p>More watch options</p>
                        </button>
                    </div>
                   </div>
                </section>
            </div>
           </div> 
        </>
     );
}
 
export default DetailsLayout;