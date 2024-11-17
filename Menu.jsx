import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <h1>Ronaksinh</h1>
            <ul>
                <li>
                    <Link to="/home">Home</Link >
                       
                </li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Menu
