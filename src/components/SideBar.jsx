import { NavLink } from 'react-router-dom';
import logo from "../assets/tv_icon.png"
import { GoHome } from 'react-icons/go'
import { BiCameraMovie } from 'react-icons/bi'
import { PiMonitorPlayLight } from 'react-icons/pi'
import { CgCalendarDates } from 'react-icons/cg'
import { IoLogOutOutline } from 'react-icons/io5'

const SideBar = () => {
    return ( 
        <>
          <section className="nav-section">
                    <div className="menu">
                        <div className="logo">
                            <img src={logo} alt="logo" className="logo-icon" />
                            <h2 className="menu-name">MovieBox</h2>
                        </div>
                        <ul className="menu-list">
                            <NavLink to="/" className="nav_link">
                                <GoHome className="home_icon" />
                                <li>Home</li>
                            </NavLink>
                            <NavLink to="/" className="nav_link">
                                <BiCameraMovie className="home_icon" />
                                <li>Movies</li>
                            </NavLink>
                            <NavLink to="/" className="nav_link">
                                <PiMonitorPlayLight className="home_icon" />
                                <li>TV Series</li>
                            </NavLink>
                            <NavLink to="/" className="nav_link">
                                <CgCalendarDates className="home_icon" />
                                <li>Upcoming</li>
                            </NavLink>
                            <div className='quizes'>
                                <p className='quiz_p1'>Play movie quizes and earn free tickets</p>
                                <p className='quiz_p2'>50k people are playing now</p>
                                <button className='btn'>Start Playing</button>
                            </div>
                            <NavLink to="/" className="nav_link logout">
                                <IoLogOutOutline className="home_icon" />
                                <li>Log out</li>
                            </NavLink>
                        </ul>
                    </div>
                </section>  
        </>
     );
}
 
export default SideBar;