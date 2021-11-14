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

class Abouts extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="centered">
                    <h2>About me</h2>
                </div>
                <p>
                    Veniam tempor ut ullamco excepteur cupidatat ut deserunt laborum dolor pariatur est irure velit. Voluptate ex laborum excepteur commodo quis veniam et commodo ullamco. Ea dolore incididunt mollit commodo et aliquip exercitation. Enim esse pariatur minim et exercitation ea nostrud voluptate fugiat labore anim. Consectetur ullamco magna proident qui ea minim eu fugiat in culpa sit ipsum nostrud occaecat. Sunt deserunt exercitation pariatur laboris dolore.
                </p>
                <p>
                    Ya pazhiloy gibbon 64 goda
                </p>
                <ul>
                    <h3>Ya mogu v</h3>
                    <li>Amogus</li>
                    <li>Dota</li>
                    <li>Pivo</li>
                </ul>
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
                        you can navigate through and zoom fractals for better view. To run this project you need to install
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

class Contacts extends React.Component {
    render() {
        return (
            <div className="container">
                <div id="contactsContent">
                    <h2>Contact me</h2>
                    <p>Here</p>
                    <p>Here</p>
                    <p>And Here</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Title/>, document.getElementById("title"));
ReactDOM.render(<Abouts/>, document.getElementById("abouts"));
ReactDOM.render(<Projects/>, document.getElementById("projects"));
ReactDOM.render(<Contacts/>, document.getElementById("contacts"));