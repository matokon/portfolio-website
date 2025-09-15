import styles from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { EduExp } from './components/EducationExperience/EduExp';
import { Contact } from './components/Contact/Contact';

function App() {

  return <div className={styles.app}>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <EduExp/>
    <Contact/>
  </div>;
  
}

export default App
