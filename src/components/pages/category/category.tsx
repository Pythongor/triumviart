import React from "react";
import { connect } from "react-redux";
import { categories } from "components/filter/tags";
import { useNavigate } from "react-router-dom";
import { Section, Filter, ProjectsContainer, Button } from "components";
import styles from "./category.module.scss";

type OwnProps = {
  type: string;
};

type CategoryType = "visual" | "sound" | "textual";

console.log(categories);

const perceptionVerbs = { visual: "see", sound: "hear", textual: "grasp" };

const Category: React.FC<OwnProps> = ({ type }) => {
  const category = (Object.entries(categories).find(([, subcategories]) =>
    subcategories.includes(type)
  ) || ["textual"])[0];
  const verb = perceptionVerbs[category as CategoryType];
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <Section
        title={
          <>
            how we <span className={styles.yellow}>{verb}</span> the war
          </>
        }
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nemo atque
      tempora eveniet laborum voluptas dolore ea ab excepturi dolorem libero
      eligendi, nam sit aliquid vitae asperiores ipsum velit cupiditate
      recusandae earum numquam, hic nihil. Officia, aliquid! Fuga est voluptates
      officia, earum quae at eius aspernatur animi consequatur autem! Veniam,
      odit praesentium! Sit quam sapiente iusto culpa blanditiis perspiciatis
      aspernatur sunt magni perferendis, voluptatum vel. Pariatur culpa mollitia officiis esse."
      />
      <Filter type={type} />
      <ProjectsContainer />
      <Button
        text="Back"
        onClick={() => navigate(-1)}
        isDark
        customClass={styles.button}
      />
    </div>
  );
};

export default connect()(Category);
