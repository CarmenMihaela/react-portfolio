import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Sass/main.css"

// Components
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";


//Pages
import Error from "./pages/Error";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
    <Menu />
    <Switch>
    <Route path="/" exact  >
        <Homepage />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
