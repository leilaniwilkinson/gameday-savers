import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <div className="col1">
                    <h1>Gameday Savers</h1>
                    <p>
                        Howdy! Gameday Savers is a resource for fellow Aggies and visitors alike focused on creating 
                        a more enjoyable game day experience at Texas A&M. Our goal is to provide essential information 
                        necessary to navigate College Station and to prepare for game day.
                    </p>
                </div>
                <div className="col2">
                    <h1>Menu</h1>
                    <ul>
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to="/Maps"> Maps </Link></li>
                        <li><Link to="/FAQ"> FAQ </Link></li>
                        <li><Link to="/Forums"> Forums </Link></li>
                        <li><Link to="/Admin"> Admin </Link></li>
                    </ul>
                </div>
                <div className="col3">
                    <h1>Contact Us</h1>
                    <p>
                        979-867-5309
                    </p>
                </div>
            </div>
            <div className="container">
                <p>© 2021 - Gameday Savers</p>
            </div>
        </div>
    )
}
