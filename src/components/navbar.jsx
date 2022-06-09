import React from 'react';
import {Link} from "react-router-dom";

// to do state for the button component (mobileNavBar)
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

class BurgerButtonOpen extends React.Component{
    render(){
        console.log("Rendering <BurgerButtonOpen>")
        return(
            <>
                <ul className="menubox">
                    <li onClick = {this.props.onClick} key="home"><Link className="menu-item" to="/"><i className="fas fa-home"></i>home</Link></li>
                    <li onClick = {this.props.onClick} key="portfolio"><Link  className="menu-item" to="/portfolio"><i
                        className="fas fa-paint-brush"></i>portfolio</Link></li>
                    <li onClick = {this.props.onClick} key="contacts"><Link  className="menu-item" to="/contacts"><i
                        className="fas fa-address-card"></i>contacts</Link></li>
                </ul>
            </>
        )
    }
}

class MobileNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {burgerButtonOpen: false}
    }
    handleClick() {
        this.setState(state => ({
            burgerButtonOpen: !state.burgerButtonOpen
        }));
    }
    render() {
        let navBar;
        if (this.state.burgerButtonOpen) {
            navBar = <BurgerButtonOpen onClick={this.handleClick.bind(this)}/>;
        }
        console.log("Rendering <MobileNavBar> with state:", this.state)
        return (
            <div className="row main-bar">
                <input id="menu-toggle" type="checkbox" checked={this.state.burgerButtonOpen} onChange={() => {}}/>
                <label id="menu-btn" onClick = {this.handleClick.bind(this)} className="menu-btn" htmlFor="menu-toggle" >
                    <span></span>
                </label>
                {navBar}
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