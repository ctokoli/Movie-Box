/* eslint-disable no-unused-vars */
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { useQuery } from "@tanstack/react-query";
import SideBar from "./SideBar";
import { useParams } from 'react-router-dom';
import Trailer_img from "../assets/trailer.png"
import Movies_img from "../assets/movies.png"
import { FetchMovie } from "../api/fetchMovies";
import { AiFillStar } from 'react-icons/ai'
import { IoTicketOutline } from 'react-icons/io5'
import { BsListUl } from 'react-icons/bs'

const DetailsLayout = () => {
    const { movie } = useParams();
       const {status, error, data:data } = useQuery({
        queryKey: ["movie"],
        queryFn: () => FetchMovie(movie),
    })
    
    if(status === "loading") return <h2>Loading.....</h2>
    if(status === "error") return <h2>{JSON.stringify(error)}</h2>
    const videoId = data.videos.results[0].key;
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    return ( 
        <>
          <div>
            <div className="details-page">
                <SideBar />
                <section className="details-content">
                   <div className="trailer">
                    <ReactPlayer width={1052} height={400} url={url} />
                   </div>
                   <div className="media_info">
                    <div className="movie_title">
                        <span>{data.title}</span> 
                        <span>• </span>
                        <span>{data.release_date.slice(0,4)}</span>
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
                            <p>{data.overview}</p>
                            <div className="producers">
                                <p>Director : <span className="p-text">Joseph Kosinski</span></p>
                                <p>Writers : <span className="p-text">Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
                                <p>Stars : <span className="p-text">Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                            </div>
                             <button className="rated_btn">Top Rated movies #65</button>
                             <select className="select">
                                <option>Awards 9 nominations</option>
                             </select>
                        </div>
                        <div className="contents_btn">
                            <button className="show_btn">
                            <IoTicketOutline className="ticket_icon" />
                            <p>See Showtimes</p></button>
                            <button className="more_btn">
                            <BsListUl className="list_icon" />
                            <p>More watch options</p>
                            </button>
                         <img src={Movies_img} alt="movies" />
                        </div>
                   </div>
                </section>
            </div>
           </div> 
        </>
     );
}
 
export default DetailsLayout;