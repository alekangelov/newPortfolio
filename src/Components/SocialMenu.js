import React from 'react';

export default class SocialMenu extends React.Component {
    render() {
        return (
            <ul className={this.props.cclass}>
                <li><a href="https://instagram.com/angelov.alek"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/alekangelov"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://behance.net/alekangelov"><i className="fab fa-behance"></i></a></li>
                <li><a href="https://github.com/alekangelov"><i className="fab fa-github"></i></a></li>
            </ul>
        )
    }
}