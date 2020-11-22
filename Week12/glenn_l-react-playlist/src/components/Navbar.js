import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
    <header className="header">
        <section className="header__section">
            <h1 className="header__h1">Play My List</h1>
            <h2 className="header__h2">We could assist! You can't resist, that you need a playlist</h2>
        </section>
        <nav className="header__nav">
            <Link
                to="/"
                className="header__link"
            >Home</Link>
            <Link
                to="/pages/About"
                className="header__link"
            >About</Link>
        </nav>
    </header>
);