import Typewriter from "typewriter-effect";

const Homepage = () => {
    return (
        <>
            <section className="homepage">
                <div className="homepage_name">
                <h1>Hey there! I am Carmen Vernica, a front-end developer. </h1>
                <h1 className="typewriter" >
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
                    </h1>

                </div>
            </section>
        </>
    )
}

export default Homepage
