import {FaGit, FaGithub, FaLinkedin, FaEnvelopeSquare} from "react-icons/fa"
import Typewriter from "typewriter-effect";

const Contact = () => {
    return (
        <div className="contact">
        <h1>Hey there, if you are interested in my work, let's connect!</h1>
        <div className="social-icons">
            <ul >
                <li><a href="https://github.com/CarmenMihaela" target="_blank" rel="noopener noreferrer"> <FaGithub/></a></li>
                <li><a href="mailto:hey@carmenmihaela.com" target="_blank" rel="noopener noreferrer"><FaEnvelopeSquare/> </a></li>
                <li><a href="https://www.linkedin.com/in/carmen-vernica/" target="_blank" rel="noopener noreferrer"> <FaLinkedin/></a></li>
            </ul>
            </div>
            {/* <h1 className="typewriter" >
                    <Typewriter

                        onInit={(typewriter) => {

                            typewriter

                                .typeString("I ❤ to develop. ")

                                .pauseFor(1000)
                                .typeString("I ❤ React.js. ")
                                

                                .pauseFor(1000)
                                
                                .typeString("I ❤ vanilla JS. ")
                                
                                .pauseFor(1000)
                                
                                .typeString("I ❤ Sassy CSS. ")

                                .pauseFor(1000)
                                
                                .typeString("I ❤ Python.")
                                .start();

                        }}
                    />
                    </h1> */}
        </div>
    )
}

export default Contact
