import React from 'react';
import styles from './EduExp.module.css';

export const EduExp = () => {
  return (
    <section className={styles.container} id="eduexp">
      <h1 className={styles.title}>
        Edukacja i Doświadczenie
      </h1>
      <h2 className={styles.minititle}>🎓 Politechnika Krakowska (czerwiec 2024 – obecnie)</h2>
      <h3 className={styles.text}>
        Obecnie studiuję informatykę, gdzie zdobywam solidne podstawy teoretyczne oraz praktyczne 
        w zakresie programowania i inżynierii oprogramowania.
      </h3>

      <h2 className={styles.minititle}>💻 42 Warsaw (czerwiec 2024 – obecnie)</h2>
      <h3 className={styles.text}>
        Biorę udział w innowacyjnym programie edukacyjnym, w którym uczymy się w modelu peer-to-peer — 
        bez klasycznych wykładowców,<br /> opierając się na samodzielnej pracy, współpracy i wzajemnym wsparciu w zespole. 
        Dzięki temu rozwijam swoje umiejętności programistyczne w praktycznych projektach.
      </h3>

      <h2 className={styles.minititle}>👨‍🏫 Kodland — Tutor (kwiecień 2025 – obecnie)</h2>
      <h3 className={styles.text}>
        Prowadzę zajęcia z programowania dla dzieci i młodzieży. 
        Uczę głównie Pythona oraz Scratcha, a także wprowadzam w podstawy algorytmiki i logiki programistycznej.<br />
        Stawiam na kreatywność uczniów poprzez praktyczne projekty. 
        Dzięki temu stale doskonalę również swoje umiejętności komunikacyjne i dydaktyczne.
      </h3>

    </section>
  );
}
