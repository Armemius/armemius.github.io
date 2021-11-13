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
                <Project name="Fractals" lang="C++" 
                img1="resources/img/fractal0.png" img2="resources/img/fractal1.png">
                    <p>Simple program that display several types of fractals, such as geometric, algebraic and stochastic, 
                        you can navigate through and zoom fractals for better look. To run this project you need to install
                        and configure SFML library in Visual Studio, or you can just run standalone version, which does not 
                        have any dependencies.
                    </p>
                    <p>Written on C++, using <a href="https://www.sfml-dev.org/index.php">SFML</a> graphics library</p>
                    <a href="https://github.com/Armemius/Fractals">Go to github repository</a>
                </Project>
                <Project name="Gravitation simulator" lang="Java" 
                img1="resources/img/gravsim0.png" img2="resources/img/gravsim1.png">
                    <p>Program that simulates and demonstrates gravitational forces that influence a bundle of objects on
                        the deck. You can edit mass, speed and position of each object. Also it's possible to remove
                        existing or add new objects. No extra libraries needed to run this project.
                    </p>
                    <p>Written on Java, using Java Swing graphics library, requires Java 10 or above to
                        run standalone version
                    </p>
                    <a href="https://github.com/Armemius/GravitationSimulator">Go to github repository</a>
                </Project>
            </div>
            );
    }
}

ReactDOM.render(<Title/>, document.getElementById("title"));
ReactDOM.render(<Projects/>, document.getElementById("projects"));