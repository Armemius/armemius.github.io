class Title extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Armemius' present site</h1>
                <a href="#projects">Go to projects section</a>
            </div>
            );
    }
}

class Project extends React.Component {
    render() {
        return (
            <div className="container project">
                
                <div className="projGrid">
                    <i>
                        <h3>{this.props.name} <small class="lang">{this.props.lang}</small></h3>
                    </i>
                    <i></i>
                    <i className="projImg">
                        <img src={this.props.img1} alt="preview"></img>
                        <img src={this.props.img2} alt="preview"></img>
                    </i>
                    <i className="projDescription">
                        {this.props.children}
                    </i>
                </div>
            </div>
            );
    }
}

class Projects extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>My projects</h2>
                <a name="projects"></a>
                <Project name="Fractals" lang="C++" img1="resources/img/fractal0.png" img2="resources/img/fractal1.png">
                    <p>Simple program that display several types of fractals</p>
                    <p>Written on C++</p>
                    <a href="https://github.com/Armemius/Fractals">Go to github repository</a>
                </Project>
            </div>
            );
    }
}

ReactDOM.render(<Title/>, document.getElementById("title"));
ReactDOM.render(<Projects/>, document.getElementById("projects"));