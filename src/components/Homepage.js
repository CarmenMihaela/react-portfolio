import { useState, useEffect } from "react"
import { shuffle } from 'lodash'
import {v4 as uuidv4 } from "uuid"

const Homepage = () => {
  

      const images = [
        {id: uuidv4(), name: "JavaScript", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"}, 
        {id: uuidv4(), name: "React.js", url:"https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"},
        {id: uuidv4(), name: "CSS", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png"},
        {id: uuidv4(), name: "SASS", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/768px-Sass_Logo_Color.svg.png"},   
        {id: uuidv4(), name: "HTML", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png"}, 
        {id: uuidv4(), name: "Bootstrap", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png"}, 
        {id: uuidv4(), name: "Wordpress", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wordpress-Logo.svg/768px-Wordpress-Logo.svg.png"}, 
        {id: uuidv4(), name: "Python", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/165px-Python-logo-notext.svg.png"}, 
    ]

    const [cards, setCards] = useState(shuffle([...images, ...images]))
    const [clicks, setClicks] = useState(0)
    const [activeCards, setActiveCards] = useState([])
    const [foundPairs, setFoundPairs] = useState([])
    const [won, setWon] = useState(false)
    

    function flipCard(index) {

      //reseting all if game is won
      if (won) {
        setCards(shuffle([...images, ...images]))
        setFoundPairs([])
        setWon(false)
        setClicks(0)
      }
      if (activeCards.length === 0) {
      setActiveCards([index])
      }

      if (activeCards.length === 1) {
        const firstIndex = activeCards[0]
        const secondIndex = index
        if (cards[firstIndex] === cards[secondIndex]) {

          if (foundPairs.length +2 === cards.length) {
            setWon(true)
          }

          setFoundPairs([...foundPairs, firstIndex, secondIndex])
        }
        setActiveCards([...activeCards, index])
        }

      if (activeCards.length === 2) {


        setActiveCards([index])
        }

        setClicks(clicks + 1)

    }

    const text = ["Hey there! Do you want to play a game?", "Turn the tiles and find the matching ones"]

  return (
    <div>
      <div className="board">
      {cards.map((card, index ) =>  {
        const flippedToFront = (activeCards.indexOf(index) !== -1) || foundPairs.indexOf(index) !== -1
        return (
          <div className={"card-outer " + ( flippedToFront ? 'flipped': '')} key={card.id} onClick={() => flipCard(index)}>
        <div className="card">
          <div className="front">
            <img src={card.url} alt={card.name} />
          </div>
          <div className="back"></div>
        </div>
      </div>
        )
      })}
      </div>
      <div className="stats">
      { won ?
        <>You won the game. Congratulations! </> : <>Let's play a memory game!</>
      }
      <span> Clicks: {clicks}</span>
      <span> Found pairs: {foundPairs.length/2} </span></div>
      
    </div>
  )

}


//     const [openedCard, setOpenedCard] = useState([])
//     const [matched, setMatched] = useState([])

//     const skills = [
//         {id: 1, name: "JavaScript", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"}, 
//         {id: 2, name: "React.js", url:"https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"},
//         {id: 3, name: "CSS", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png"},
//         {id: 4, name: "SASS", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/768px-Sass_Logo_Color.svg.png"},   
//         {id: 5, name: "HTML", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png"}, 
//         {id: 6, name: "Bootstrap", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png"}, 
//         {id: 7, name: "Wordpress", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wordpress-Logo.svg/768px-Wordpress-Logo.svg.png"}, 
//         {id: 8, name: "Python", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/165px-Python-logo-notext.svg.png"}, 
//     ]

//     const pairOfSkills = [... skills, ...skills]

//     function flipCard(index) {
//         setOpenedCard((opened) => [...opened, index])
//     }

//     useEffect(() => {
//         if (openedCard < 2) return

//         const firstMatched = pairOfSkills[openedCard[0]]
//         const secondMatched = pairOfSkills[openedCard[1]]

//         if (secondMatched && firstMatched.id === secondMatched.id) {
//             setMatched([... matched, firstMatched.id])
//         }

//         if (openedCard.length === 2) setTimeout(() => setOpenedCard([], 1000))

//     }, [openedCard])

//     return (
//             <section className="homepage">
//                 <div className="homepage_name">
//                 <h1>Hey there, want to play a turn the tiles game?  </h1>
//                 </div>
//                 <div className="game_grid">
//                 <div className="game_cards">
//                     {pairOfSkills.map((skill, index) => {

//                         let isFlipped = false

//                         if (openedCard.includes(index)) isFlipped = true
//                         if (matched.includes(skill.id)) isFlipped = true
//                         return (
//                             <div 
//                             className={`skill-card ${isFlipped ? "flipped" : ""} `}
//                             key={index}
//                             onClick={() => flipCard(index)}
//                             >
//                             <div className="inner">
//                                 <div className="front">
//                                     <img
//                                     src={skill.url}
//                                     alt={"logo" + skill.name }
//                                     />
//                                 </div>
//                                 <div className="back"></div>
//                             </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//             </section>
//     )


export default Homepage
