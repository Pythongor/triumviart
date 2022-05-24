import React from "react";
import { Link, useLocation } from "react-router-dom";
import Default from "assets/images/default.svg";
import styles from "./projectsContainer.module.scss";

const members = [
  { name: "Lorem ipsum", src: "" },
  { name: "Lorem ipsum", src: "" },
  { name: "Lorem ipsum", src: "" },
  { name: "Lorem ipsum", src: "" },
  { name: "Lorem ipsum", src: "" },
  { name: "Lorem ipsum", src: "" },
];

const ProjectsContainer = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.wrapper}>
      {members.map(({ name, src }, index) => (
        <Link
          to={`${pathname}/${name.replace(" ", "-")}`}
          className={styles.project}
          key={index}
        >
          <img src={src || Default} alt={name} className={styles.image} />
          <div className={styles.nameWrapper}>
            <div className={styles.name}>{name}</div>
            <div className={styles.info}>{name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsContainer;
