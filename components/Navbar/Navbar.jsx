import './Navbar.css';


export const Navbar = () => {
    return (
        <>
        <nav className="Navbar">
                <li className="li"><a href="/">BeanPod</a></li>
                <li className="li"><a href="/search">Search</a></li>
                <li className="li"><a href="/podcasts">Podcasts</a></li>
                <li className="li"><a href="/favourites">Favourites</a></li>
        </nav>
        </>
    );
} 
    