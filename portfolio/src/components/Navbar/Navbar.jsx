import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import openMenuIcon from '../../assets/Navbar/openMenuIcon.svg';
import closeMenuIcon from '../../assets/Navbar/closeMenuIcon.svg';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href = '/'>Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={menuOpen ? closeMenuIcon : openMenuIcon} 
            alt="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            />

            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setMenuOpen(!menuOpen)}>
                <li><a href="#about">O mnie</a></li>
                <li><a href="#projects">Projekty</a></li>
                <li><a href="#eduexp">Edukacja i Doświadczenie</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </div>
    </nav>
  )
}
