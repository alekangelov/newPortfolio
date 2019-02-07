import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="project" id="plasterbin">
                <img src={this.props.project.image} alt="project image" />
                <h1>
                    {this.props.project.title}
                </h1>
                <p>
                    {this.props.project.text}
                </p>
                <a href={this.props.project.link}>
                    Check it out
                </a>
            </div>
        )
    }
}

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: {},
            loading: true
        }
    }
    async componentWillMount() {
        const projects = await fetch('/json/projects.json');
        const projectsJson = await projects.json();
        this.setState({
            projects: projectsJson.projects,
            loading: false
        })
    }
    render() {
        const { projects, loading } = this.state;
        if (!loading) {
            return (
                <div className="page page-projects">
                    {
                        projects.map(project => <Project project={project} />)
                    }
                </div>
            )
        } else {
            return (
                <p>
                    Loading
                </p>
            )
        }
    }
}