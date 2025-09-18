import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import { projects } from "../../data/Projectsdata";

export const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projekty-heading" className={styles.section}>
      <h2 id="projekty-heading" className={styles.title}>Moje projekty</h2>
      <div className={styles.grid} role="list">
        {projects.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
    </section>
  );
};
