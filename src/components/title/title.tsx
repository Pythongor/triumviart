import React from "react";
import cn from "classnames";
import { categories, allCategories } from "components/filter/tags";
import { useLocation } from "react-router-dom";
import styles from "./title.module.scss";

const Title = () => {
  const { pathname } = useLocation();
  const pageName = pathname.slice(1);
  let titles: [React.ReactNode, React.ReactNode] = ["404", "not found"];
  if (pageName === "") {
    titles = [
      <>
        Triumvi<span className={styles.blue}>art</span>:
      </>,
      <>
        no <span className={styles.yellow}>art</span> is indifferent
      </>,
    ];
  } else if (pageName === "about") {
    titles = [
      <>
        Triumvi<span className={styles.blue}>art</span>:
      </>,
      <>
        no <span className={styles.yellow}>art</span> is indifferent
      </>,
    ];
  } else if (allCategories.includes(pageName)) {
    const parentCategory = (Object.entries(categories).find(
      ([, subcategories]) => subcategories.includes(pageName)
    ) || [""])[0];
    titles = [
      <>
        <span className={styles.blue}>{parentCategory}</span> Art:
      </>,
      <>{pageName}</>,
    ];
  } else if (allCategories.includes(pageName.split("/")[0])) {
    const [category, projectName] = pageName.split("/");
    const parentCategory = (Object.entries(categories).find(
      ([, subcategories]) => subcategories.includes(category)
    ) || [""])[0];
    titles = [
      <>
        <span className={styles.blue}>{parentCategory}</span> Art:
      </>,
      <>{projectName}</>,
    ];
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={cn(styles.title, styles.title_top)}>{titles[0]}</h1>
      <div className={styles.divider} />
      <h1 className={cn(styles.title, styles.title_bottom)}>{titles[1]}</h1>
    </div>
  );
};

export default Title;
