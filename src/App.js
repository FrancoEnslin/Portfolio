import './App.css';
import { Banner } from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import {NavBar} from './Components/Nav/navbar';


function App() {
  return (
    <div>
       <NavBar />
       <Banner />
       <Footer />
    </div>
  );
}

export default App;
