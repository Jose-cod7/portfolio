import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.js";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HireMe from "./components/HireMe.js";

import { MainInfo } from "./MainInfo";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <MainInfo />
            </Route>
            <Route path="/hireme">
              <HireMe />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
