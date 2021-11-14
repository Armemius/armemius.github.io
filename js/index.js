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
                   My name is Arseniy, I started learning programming
                   since I was 14, in school. Later I entered the 
                   C++ informatics group and graduated from it.
                   While learning, I also studied other languages,
                   such as C#, Java and Javascript. In process
                   I developed several projects which you can 
                   take a look at below.
                   Now I'm looking towards starting a career.
                </p>
                <ul>
                    <h3>My skillset:</h3>
                    <li>Frontend: HTML, CSS and Javascript</li>
                    <li>Backend: C#, Java and C++</li>
                    <li>Git commands + git flow</li>
                    <li><strike>Bash console</strike></li>
                    <li><strike>Advanced OOP and patterns</strike></li>
                    <li><strike>Unit testing</strike></li>
                    <li><strike>Docker</strike></li>
                    <li><strike>SQL</strike></li>
                    <li><strike>Basic web security</strike></li>
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
                    <p>My vk: <a href="https://vk.com/rusgy_cufu">@rusgy_cufu</a></p>
                    <p>My tg: <a href="https://web.telegram.org/">@armemius</a></p>
                    <p>My email: <a href="mailto: rusgy@yandex.ru">rusgy@yandex.ru</a></p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Title/>, document.getElementById("title"));
ReactDOM.render(<Abouts/>, document.getElementById("abouts"));
ReactDOM.render(<Projects/>, document.getElementById("projects"));
ReactDOM.render(<Contacts/>, document.getElementById("contacts"));