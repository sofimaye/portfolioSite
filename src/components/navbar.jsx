import React from 'react';
import {Link} from "react-router-dom";

class MainNavBar extends React.Component {
    render() {
        return (
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
        )
    }
}

class MobileNavBar extends React.Component {
    render() {
        return (
            <div className="row main-bar">
                <input id="menu-toggle" type="checkbox"/>
                <label className="menu-btn" htmlFor="menu-toggle">
                    <span></span>
                </label>
                <ul className="menubox">
                    <li key="home"><Link className="menu-item" to="/"><i className="fas fa-home"></i>home</Link></li>
                    <li key="portfolio"><Link className="menu-item" to="/portfolio"><i
                        className="fas fa-paint-brush"></i>portfolio</Link></li>
                    <li key="contacts"><Link className="menu-item" to="/contacts"><i
                        className="fas fa-address-card"></i>contacts</Link></li>
                </ul>
            </div>
        )
    }
}

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mobileBar: window.innerWidth < 801};
    }

    render = () => (
        <div>
            {(this.state.mobileBar) ? <MobileNavBar/> : <MainNavBar/>}
        </div>
    )

    updateDimensions = () => {
        this.setState({mobileBar: window.innerWidth < 801})
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
}