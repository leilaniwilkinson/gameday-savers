import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className="navbar">
            
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <div className="brand">
                    <img src={Logo}/>
                    <Link to="/"> Gameday Savers </Link>
                </div>
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/Maps"> Maps </Link>
                    <Link to="/FAQ"> FAQ </Link>
                    <Link to="/Forums"> Forums </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/Maps"> Maps </Link>
                <Link to="/FAQ"> FAQ </Link>
                <Link to="/Forums"> Forums </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar
