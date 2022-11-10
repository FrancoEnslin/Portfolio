import './App.css';
import { Banner } from './Components/Banner/Banner';
import {Footer} from './Components/Footer/Footer'
import {NavBar} from './Components/Nav/navbar';
import {Skills} from './Components/Skills/Skills'
import 'bootstrap/dist/css/bootstrap.min.css'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact';
import Spline from './Components/Spline/Spline';


function App() {
  return (
    <div>
       <NavBar />
       <Banner />
       <Skills />
       <Spline />
       <Projects />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
