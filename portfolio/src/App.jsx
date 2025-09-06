import styles from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';

function App() {

  return <div className={styles.app}>
    <Navbar/>
    <Hero/>
    <About/>
  </div>;
  
}

export default App
