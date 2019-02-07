import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Menu from './Components/MainMenu'
import SocialMenu from './Components/SocialMenu'
import Background from './Components/Background'
import Footer from './Components/Footer'
import Home from './Routes/Home'
import Projects from './Routes/Projects'
import Contact from './Routes/Contact'
import About from './Routes/About'
import './css/app.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = {};
    this.hideMenu = this.hideMenu.bind(this);
  }
  componentWillMount() {
    this.history = createBrowserHistory();
    this.history.listen((location, action) => {
      setTimeout(this.hideMenu, 10)
    })
  }
  componentDidMount() {
    setTimeout(this.hideMenu, 10)
  }
  hideMenu() {
    const burger = document.querySelector('.burger'), menu = document.querySelector('.menu');
    burger.classList.remove('open')
    menu.classList.remove('open')
    menu.classList.remove('menu-show')
  }
  render() {
    return (
      <div id="wrapper">
        <Router history={this.history}>
          <React.Fragment>
            <Menu />
            <Background />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <div className="social-bar">
              <SocialMenu />
            </div>
            <Footer />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
