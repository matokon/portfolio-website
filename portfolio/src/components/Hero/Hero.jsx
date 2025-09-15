import React from 'react';
import cvButton from '../../assets/Hero/cvButton.svg';
import githubIcon from '../../assets/Hero/githubButton.svg';
import linkedinIcon from '../../assets/Hero/linkedinButton.svg';
import profilePhoto from '../../assets/Hero/profilePhoto.svg';
import styles from './Hero.module.css';
import cvFile from "../../assets/Hero/okon-mateusz-cv.pdf";

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hej, jestem Mateusz 👋
        </h1>
        <p className={styles.description}>
          Jestem studentem Politechniki <br />
          Krakowskiej na kierunku informatyka <br />
          i stale rozwijam swoje umiejętności programistyczne w 42 Warsaw.
        </p>
      </div>

      <div className={styles.followme}>
        <span>Zaobserwuj mnie na:</span>
        <a
          href="https://github.com/matokon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/mateusz-oko%C5%84-2458a6332/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>

      <div className={styles.mycv}>Moje CV:
      <a href={cvFile} download="Mateusz_Okon_CV.pdf" aria-label="Pobierz moje CV">
        <img src={cvButton} alt="cv-button" />
      </a>
      </div>
      <img src={profilePhoto} alt="profile-photo" className={styles.heroimage} />
    </section>
  );
};
