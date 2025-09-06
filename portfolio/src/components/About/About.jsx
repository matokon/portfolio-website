import React from 'react';
import myPhoto from '../../assets/About/scuba-diver-portrait.jpg';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>O mnie</h2>

      <div className={styles.wrap}>
        <img className={styles.myphoto} src={myPhoto} alt="Portret w sprzęcie do nurkowania" />

        <article className={styles.text}>
          <p>
            Poza nauką i pracą dużo radości daje mi aktywność fizyczna – szczególnie
            siłownia i bieganie, które uczą mnie systematyczności i konsekwencji.
          </p>
          <p>
            Moją pasją jest też nurkowanie – zdobyłem certyfikat OWD i uwielbiam
            odkrywać podwodne przestrzenie, które pozwalają mi łączyć zamiłowanie do
            przygód z potrzebą ciągłego poznawania nowych perspektyw.
          </p>
          <p>
            Dzięki temu nie boję się wyzwań i zawsze szukam sposobów, by poszerzać
            swoje horyzonty.
          </p>
        </article>
      </div>
    </section>
  );
};
