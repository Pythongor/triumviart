import React from "react";
import { connect } from "react-redux";
// import { LoginForm } from "..";
import { StateType } from "ducks/types";
import { tagsByCategory } from "./tags";
import styles from "./filter.module.scss";

type OwnProps = { type: string };
type StateProps = ReturnType<typeof MSTP>;

const Filter: React.FC<StateProps & OwnProps> = ({ token, type }) => {
  const tags = tagsByCategory[type];
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.categoryTitle}>Filter by Tags</h2>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <button className={styles.tag} key={tag}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

const MSTP = ({ token }: StateType) => ({ token });

export default connect(MSTP)(Filter);
