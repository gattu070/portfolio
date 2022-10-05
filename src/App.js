import './index.css';
import './main.tailwind.css';
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from './Components/Hero/Hero';
import { About } from './Components/About/About';
import { Projects } from './Components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
