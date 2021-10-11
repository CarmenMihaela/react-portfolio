import * as S from './styles'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom'
import Homepage from './Homepage'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Contact from '../pages/Contact'

type Props = {
    open: boolean;
}

const RightNav = (props: Props) => {
    return (
        <Router>
            <S.Ul open={props.open}>

            <NavLink to="/homepage"
          activeStyle={{
            color: "#FF5CA0"
          }}
        >
          <li>Home</li>
        </NavLink>
        <NavLink to="/projects"
          activeStyle={{
            color: "#FF5CA0"
          }}
        >
          <li>Projects</li>
        </NavLink>
        <NavLink to="/about"
          activeStyle={{
            color: "#FF5CA0"
          }}
        >
          <li>About me</li>
        </NavLink>
        <NavLink to="/contact"
          activeStyle={{
            color: "#FF5CA0"
          }}
        >
          <li>Contact</li>
        </NavLink>
            </S.Ul>

            <Switch>
                <Route exact path="/homepage">
                    <Homepage />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route exact path="/about">
                <About />
                </Route>
                <Route exact path="/contact">
                <Contact />
                </Route>
               <Redirect to='/homepage' />
            </Switch>
        </Router>
    )
}

export default RightNav
