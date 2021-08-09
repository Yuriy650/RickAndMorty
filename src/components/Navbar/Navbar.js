import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
    return (

        <div className='navbar-wrapper'>
            {/*<div><NavLink className='nav' to='/home'>Home</NavLink></div>*/}
            <div><NavLink className='nav' to='/characters'>Characters</NavLink></div>
            <div><NavLink className='nav' to='/episodes'>Episodes</NavLink></div>
            <div><NavLink className='nav' to='/location'>Location</NavLink></div>
            <div><NavLink className='nav' to='/mywatch'>My watch</NavLink></div>
        </div>

    )
}

export default Navbar;
