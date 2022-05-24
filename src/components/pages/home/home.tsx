import React from "react";
import { Section, Categories } from "components";
import { ReactComponent as Coin } from "assets/images/coin.svg";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Section
        link={{ text: "Read more", to: "/about" }}
        imageComponent={Coin}
        title="About this project"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa vero
      praesentium accusamus officiis repudiandae ipsam asperiores, ad aut, dicta
      quae animi sit natus dolor hic nesciunt tempora, consectetur incidunt non
      eaque. Iure aut vitae perferendis omnis ipsum? Esse iusto nam nisi dolor
      beatae commodi ipsa. Minus quos nulla qui!"
      />
      <Categories />
    </div>
  );
};

export default Home;
