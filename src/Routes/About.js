import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="page page-about">
                <video controls poster="https://instagram.fskp2-1.fna.fbcdn.net/vp/98120dbceef8e61c1dd9d0e89a16eb79/5C5E73D9/t51.2885-15/e15/50561678_2301878636723951_1990858599994356483_n.jpg?_nc_ht=instagram.fskp2-1.fna.fbcdn.net">
                    <source src="https://instagram.fskp2-1.fna.fbcdn.net/vp/fdb53eb70eef60246013c157cc42a0c5/5C5E8205/t50.2886-16/51619746_714259482301067_7294743786066804736_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6ImlnX3N2ZV9wcm9ncmVzc2l2ZV8xMjIifQ&_nc_ht=instagram.fskp2-1.fna.fbcdn.net&vtsbc=1" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="about-text">
                    <h1>
                        About Me
                    </h1>
                    <p>
                        I'm a 20 something year old software developer. Fluent in many languages, but JavaScript seems to be my favorite one right now. In my free time I like to lift heavy weight and do UI/UX design.
                           <br /><br />
                        Been into websites since I was a little kid, making them with free generators online. It was a blast, but now it's even more fun since I kinda understand how the web works.
                           <br /><br />
                        My end goal is to design and develop ultimate, multilayered expiriences that will enrich and evolve people's lives.
                           <br /><br />
                        I like anime and Tarantino movies. So basic.
                           <br /><br />
                        Also war movies. Pacino, DeNiro, Bruce Willis films. All of those are the absolute bombs.
                    </p>
                </div>
            </div>
        )
    }
}