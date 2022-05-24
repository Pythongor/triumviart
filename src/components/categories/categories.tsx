import React from "react";
import { Link } from "react-router-dom";
import { categories } from "components/filter/tags";
import styles from "./categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>View categories</h2>
      {Object.entries(categories).map(([title, subcategories]) => (
        <div className={styles.category} key={title}>
          <h3 className={styles.categoryTitle}>{title}</h3>
          <div className={styles.categoryContainer}>
            {subcategories.map((subcategory) => (
              <Link
                to={`/${subcategory}`}
                key={subcategory}
                className={styles.categoryLink}
              >
                {subcategory}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
