import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import {getUrl} from "../../utils";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href = '/'>Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={getUrl("Navbar/menuicon.png")} alt="icon"/>
            <ul className={styles.menuItems}>
                <li>
                    <a href='#about'>O mnie</a>
                </li>
                <li>
                    <a href='#projects'>Projekty</a>
                </li>
                <li>
                    <a href='#education'>Edukacja i Doświadczenie</a>
                </li>
                <li>
                    <a href='#contact'>Kontakt</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
