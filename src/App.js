import './index.css';
import './main.tailwind.css';
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from './Components/Hero/Hero';
import { About } from './Components/About/About';
import { Projects } from './Components/Projects/Projects';
import { ScrollBtn } from './Components/ScrollBtn/ScrollBtn';
import { Footer } from './Components/Footer/Footer';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ScrollBtn />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
