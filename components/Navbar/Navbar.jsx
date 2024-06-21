import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <>
     <nav className="nav">
         <Link to="/">BeanPod</Link>
          <NavLink className="nav-li" to="/search">Search</NavLink>
          <NavLink className="nav-li" to="/podcasts">Podcasts</NavLink>
          <NavLink className="nav-li" to="/favourites">Favourites </NavLink>
                {/* <li className="li"><a href="/">BeanPod</a></li>
                <li className="li"><a href="/search">Search</a></li>
                <li className="li"><a href="/podcasts">Podcasts</a></li>
                <li className="li"><a href="/favourites">Favourites</a></li> */}
     </nav>
        </>
    );
} 
    