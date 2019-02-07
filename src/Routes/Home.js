import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="page page-landing">
                <div className="landing-image">
                    <img src="img/alek1.png" />
                </div>
                <div className="landing-text">
                    <h1>
                        Alek Angelov
                </h1>
                    <h2>
                        Front End Developer
                    <br />
                        UI / UX Designer
                </h2>
                </div>
            </div>
        )
    }
}