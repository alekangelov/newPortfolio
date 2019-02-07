import React, { Component } from 'react';
import SocialMenu from './SocialMenu';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.refferences = {}
    }
    componentDidMount() {
        const { burger, menu } = this.refferences;
        burger.addEventListener('click', () => {
            burger.classList.toggle('open')
            menu.classList.toggle('open')
            menu.classList.toggle('menu-show')
        })
    }
    render() {
        return (
            <React.Fragment>
                <navbar>
                    <div className="logo">
                        <img src="/img/logo.svg" alt="Logo" />
                    </div>
                    <div ref={div => { this.refferences.burger = div }} className="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </navbar>
                <div className="menu open" ref={div => { this.refferences.menu = div }}>
                    <div className="background">
                        <span className="bg-part"></span>
                        <span className="bg-part"></span>
                        <span className="bg-part"></span>
                        <span className="bg-part"></span>
                        <span className="bg-part"></span>
                    </div>
                    <ul>
                        <li>
                            <SocialMenu cclass="submenu" />
                        </li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About me</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default Menu;
