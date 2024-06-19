import React from "react";

export const Navbar = () => {
    return (
        <>
        <nav className="Navbar">
                <li className="li"><a href="/">Home</a></li>
                <li className="li">Search</li>
                <li className="li"><a href="/podcasts">Podcasts</a></li>
                <li className="li"><a href="/favourites">Favourites</a></li>
        </nav>
        </>
    );
} 
    