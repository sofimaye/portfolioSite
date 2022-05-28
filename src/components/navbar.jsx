import React from 'react';
import {Link} from "react-router-dom";

// to do fslightbox for React
// navbar for all pages
export class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="row main-bar">
                    <input id="menu-toggle" type="checkbox"/>
                    <label className="menu-btn" htmlFor="menu-toggle">
                        <span></span>
                    </label>
                    <ul className="menubox">
                        <li><Link className="menu-item" to="/"><i className="fas fa-home"></i>home</Link></li>
                        <li><Link className="menu-item" to="/portfolio"><i
                            className="fas fa-paint-brush"></i>portfolio</Link></li>
                        <li><Link className="menu-item" to="/contacts"><i
                            className="fas fa-address-card"></i>contacts</Link></li>
                    </ul>
                </div>

                <div className="row navigation-bar">
                    <div className="col menu">
                        <Link to="/">
                        <ul>
                            <li><i className="fas fa-home"></i>home</li>
                        </ul>
                        </Link>
                    </div>
                    <div className="col menu">
                        <Link to="/portfolio">
                        <ul>
                            <li><i className="fas fa-paint-brush"></i>portfolio</li>
                        </ul>
                        </Link>
                    </div>
                    <div className="col menu">
                        <Link to="/contacts">
                        <ul>
                            <li><i className="fas fa-address-card"></i>contacts</li>
                        </ul>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}