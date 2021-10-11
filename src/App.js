import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Sass/main.css"

// Components
import Homepage from "./components/Homepage";
import Menu from "./components/Navbar";


//Pages
import Error from "./pages/Error";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
    <Menu />
    </>
  );
}

export default App;
