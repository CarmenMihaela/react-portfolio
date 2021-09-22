import { useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { Link } from "react-router-dom"

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
                        <div className="menu-btn">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <BiMenuAltRight />
                    </button>
                </div>

                    <header className={`${isOpen && "open" }`}>

<nav>
    <ul>
        <li onClick={() => setIsOpen(false)}>
            <Link to="/">Homepage</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
            <Link to="/projects">Projects</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
            <Link to="/about">About me</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
            <Link to="/contact">Contact me</Link>
        </li>
    </ul>
</nav>
</header>



        </>
    )
}

export default Menu
