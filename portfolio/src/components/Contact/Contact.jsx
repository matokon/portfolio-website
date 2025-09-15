import React from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h1 className={styles.title}>Kontakt</h1>
      <p className={styles.lead}>
        Masz pytania? Skontaktuj się ze mną:
      </p>
        <ul className={styles.links}>
            <li>
                📧 <span className={styles.smalltitle}>E-mail:</span> mateusz.okon04@gmail.com
            </li>
            <li>
                📞 <span className={styles.smalltitle}>Telefon:</span> +48 535 373 990
            </li>
            <li>
                📍 <span className={styles.smalltitle}>Gdzie jestem?</span> Kraków
            </li>
        </ul>
    </section>
  );
};
