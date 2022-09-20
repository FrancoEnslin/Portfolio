import './App.css';
import { Banner } from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import {NavBar} from './Components/Nav/navbar';
import {Skills} from './Components/Skills/Skills'

function App() {
  return (
    <div>
       <NavBar />
       <Banner />
       <Footer />
       <Skills />
    </div>
  );
}

export default App;
