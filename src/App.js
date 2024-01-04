import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Github from "./pages/github/Github";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Footer />
    </>
  );
}

export default App;
