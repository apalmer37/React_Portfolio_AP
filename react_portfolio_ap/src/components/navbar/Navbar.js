import "./navbar.css"

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                <a href="#intro">Home</a>
                <div className="itemContainer">
                <span>(804)687-5366 || alexpalmer37@gmail.com</span>
                <span></span>
                </div>
                </div>


                <div className="right">
                <a href="#intro">About Me</a>
                </div>
                <div className="right">
                <a href="#work">Work</a>
                </div>
                <div className="right">
                <a href="#portfolio">Resume</a>
                </div>
                <div className="right">
                <a href="#contact">Contact</a>
                </div>

                    
                </div>
            </div>

    )
}