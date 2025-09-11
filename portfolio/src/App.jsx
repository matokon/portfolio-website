import styles from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';

function App() {

  return <div className={styles.app}>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
  </div>;
  
}

export default App
