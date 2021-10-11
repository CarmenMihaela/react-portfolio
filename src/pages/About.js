import { useState } from "react"
import { jobs } from "../data/jobs"

const About = () => {
    //eslint-disable-next-line
    const [items, setItems] = useState(jobs)
    return (
        <>
            <section className="about">
            <div className="me">
            <img src="images/Carmen_profilepic.jpg" alt="Carmen Vernica - Front-end Developer"/>
            <p>I am an enthusiastic and socially aware front-end developer with a drive to advance my career in the new path I have 
chosen. I love creating cool sites, apps and interfaces with code, and working with people. My previous experience in 
quotation management, account management and supply chain gives me a good background to understand business needs and 
find reliable solutions. 
</p>
                </div>
                <div class="hard-skills">
                <h2 class="text-secondary">HARD SKILLS</h2>
                <div class="skill-container">
                    <div class="skill skill-1"></div>
                    <div class="skill skill-2"></div>
                    <div class="skill skill-3"></div>
                    <div class="skill skill-4"></div>
                    <div class="skill skill-5"></div>
                    <div class="skill skill-6"></div>
                </div>
            </div>
                
                <h2 class="text-secondary workexp">WORK EXPERIENCE</h2>
                <div className="work">
                    {items.map(({ id, position, employer, years }) => (
                        <article key={id}>
                            <p>{position}</p>
                            <p class="text-secondary">{employer}</p>
                            <p>{years}</p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default About
