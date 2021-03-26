import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe.js"
import Particles from "react-particles-js";
import Timeline from "./components/Timeline.js";
import Projects from "./components/Projects.js";
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 1300
              }
            },
            shape:{
              type:"square",
              stroke:{
              width: 5,
              color: "#2029de",
              }
            }
          }
        }}/>
      <NavBar/>  
      <Header/>
      <AboutMe/>
      <Timeline/>
      <Projects/>
      <Footer/>
      
    </div>  
  );
}

export default App;
