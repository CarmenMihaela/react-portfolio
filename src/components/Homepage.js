import {FaGit, FaGithub, FaLinkedin, FaEnvelopeSquare} from "react-icons/fa"

const Homepage = () => {
    return (
        <>
        <section className="homepage">
            <div className="homepage_name">
            <img src="CV_logo.JPG" alt="Carmen Vernica - Front-end Developer"/>
            </div>
            <div className="social-icons">
            <ul >
                <li><a href="https://github.com/CarmenMihaela" target="_blank" rel="noopener noreferrer"> <FaGithub/></a></li>
                <li><a href="mailto:hey@carmenmihaela.com" target="_blank" rel="noopener noreferrer"><FaEnvelopeSquare/> </a></li>
                <li><a href="https://www.linkedin.com/in/carmen-vernica/" target="_blank" rel="noopener noreferrer"> <FaLinkedin/></a></li>
            </ul>
            </div>
        </section> 
        </>
    )
}

export default Homepage
