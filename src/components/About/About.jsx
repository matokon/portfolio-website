import React from 'react';
import myPhoto from '../../assets/About/scuba-diver-portrait.jpg';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>O mnie</h2>

      <div className={styles.wrap}>
        <img className={styles.myphoto} src={myPhoto} alt="Portret w sprzęcie do nurkowania" />

        <article className={styles.text}>
          <p>
            Poza nauką i pracą dużo radości daje mi wszelaka aktywność fizyczna. 
            Jednak zdecydowanie najczęściej jest to
            siłownia i bieganie, które uczą mnie systematyczności i dają ulgę od siedzącego trybu życia.
          </p>
          <p>
            Moją pasją jest nurkowanie oraz podróżowanie. <br />
            Zdobyłem certyfikat OWD i uwielbiam eksplorować podwodne przestrzenie oraz odkrywać nowe miejsca na mapie.  
            Dzięki temu mogę łączyć zamiłowanie do przygód z nieustanną potrzebą poznawania świata. 
            Moim marzeniem jest zobaczyć i przeżyć w życiu jak najwięcej.
          </p>
          <p>
            Po prostu lubię próbować nowych rzeczy i sprawdzać, dokąd mnie to zaprowadzi.
          </p>
        </article>
      </div>
    </section>
  );
};
