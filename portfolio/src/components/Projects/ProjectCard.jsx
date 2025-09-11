import styles from "./ProjectCard.module.css";

export default function ProjectCard({ title, description, github, demo, tags }) {
  return (
    <article className={styles.card} role="listitem">
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>

      {tags?.length ? (
        <ul className={styles.tags} aria-label="technologie">
          {tags.map(t => <li key={t} className={styles.tag}>{t}</li>)}
        </ul>
      ) : null}

      <div className={styles.actions}>
        <a className={styles.btn} href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {demo && (
          <a className={`${styles.btn} ${styles.btnGhost}`} href={demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
