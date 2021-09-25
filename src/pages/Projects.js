import { useState } from "react"
import { projects } from "../data/projects"

const Projects = () => {
    //eslint-disable-next-line
    const [cards, setCards] = useState(projects)
    return (
        <>
        <section className="projects">
        <h1>Here's what I've built so far:</h1>
        <div className="cards">
            {cards.map(({id, title, desc, github, live, image}) => (
                <div className="article" key={id}> 
                <h4>{title}</h4>
                <p>{desc}</p>
                <ul>
                    <li ><a className="github" href={github} target="_blank" rel="noopenner noreferrer">GitHub</a> </li>
                    <li ><a className="online" href={live} target="_blank" rel="noopenner noreferrer">See it live</a> </li>
                </ul>
                </div>
            ))}
        </div>
        </section>
        </>
    )
}

export default Projects
