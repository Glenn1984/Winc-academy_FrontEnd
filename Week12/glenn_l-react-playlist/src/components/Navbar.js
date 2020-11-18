import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
    <nav>
        <br/>
        <section>
            <Link to="/">Home{" "}</Link>
            <Link to="/pages/About">About</Link>
        </section>
        <br/>
        <hr />
    </nav>
);