import {FaGit, FaGithub, FaLinkedin, FaEnvelopeSquare} from "react-icons/fa"

const Contact = () => {
    return (
        <div className="contact">
        <h1>Hey there, I am Carmen Vernica, a front-end developer.
        Let's connect!</h1>
        <div className="social-icons">
            <ul >
                <li><a href="https://github.com/CarmenMihaela" target="_blank" rel="noopener noreferrer"> <FaGithub/></a></li>
                <li><a href="mailto:hey@carmenmihaela.com" target="_blank" rel="noopener noreferrer"><FaEnvelopeSquare/> </a></li>
                <li><a href="https://www.linkedin.com/in/carmen-vernica/" target="_blank" rel="noopener noreferrer"> <FaLinkedin/></a></li>
            </ul>
            </div>
        </div>
    )
}

export default Contact
