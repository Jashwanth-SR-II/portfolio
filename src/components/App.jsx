import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Contacts from './Contacts.jsx'
import useScrollReveal from './useScrollReveal.jsx'


function App() {

  useScrollReveal();

  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contacts />
    </>
  );
}

export default App;