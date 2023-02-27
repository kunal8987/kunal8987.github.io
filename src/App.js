
import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import HomePage from './Component/HomePage';
import GitHub from './Component/GitHub';
function App() {
  return (
    <div className="App" style={{backgroundColor: "#ffe0b2", fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", color: "#3e2723"}}>
      <Navbar/>
      <HomePage/>
      <About/>
      <Skills/>
      <GitHub/>
      <Contact/>
    </div>
  );
}

export default App;
