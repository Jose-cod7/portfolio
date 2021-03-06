import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HireMe from "./components/HireMe.js";

import { MainInfo } from "./MainInfo";

function App() {
  return (
    <Router>
      <div className="app">
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
    </Router>
  );
}

export default App;
