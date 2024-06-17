import React from "react";

export default function Navbar () {
    return (
        <>
        <nav className="Navbar">
                <li className="li"><a href="/">Home</a></li>
                <li className="li"><a href="/search">Search</a></li>
                <li className="li"><a href="/library">Library</a></li>
                <li className="li"><a href="/favourites">Favourites</a></li>
        </nav>
        </>
    );
} 
    