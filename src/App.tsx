import React from 'react';
import NavBar from "./components/navigation/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <Router>
        <GlobalStyle/>
        <NavBar/>

        <Switch>
            <Route path="/about">
                <div />
            </Route>
            <Route path="/users">
                <div />
            </Route>
            <Route path="/">
                <div />
            </Route>
        </Switch>

        <Projects/>

        <Footer/>

    </Router>
  );
}

export default App;
