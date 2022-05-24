import React from "react";
import { useNavigate } from "react-router-dom";
import { Section, TeamList, Button } from "components";
import { ReactComponent as Coin } from "assets/images/coin.svg";
import styles from "./about.module.scss";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <Section
        title="Who we are?"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis,
      nulla officiis expedita nostrum rerum consectetur magni quo, illum
      reprehenderit similique? Est vel numquam, id repellat quisquam cumque enim
      eos suscipit velit deleniti ea reiciendis quos! Soluta et, magni
      voluptatibus fuga vel, numquam laboriosam eveniet saepe sint sequi
      suscipit minus iusto eum consequatur odit illo, harum ipsum optio delectus
      accusantium qui commodi quos? Repellat eos voluptas sequi officia maiores
      facere, nemo, eum quos aspernatur ipsum ab necessitatibus voluptates?
      Perspiciatis, velit."
      />
      <TeamList />
      <Section
        title="About this project"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis,
      nulla officiis expedita nostrum rerum consectetur magni quo, illum
      reprehenderit similique? Est vel numquam, id repellat quisquam cumque enim
      eos suscipit velit deleniti ea reiciendis quos! Soluta et, magni
      voluptatibus fuga vel, numquam laboriosam eveniet saepe sint sequi
      suscipit minus iusto eum consequatur odit illo, harum ipsum optio delectus
      accusantium qui commodi quos? Repellat eos voluptas sequi officia maiores
      facere, nemo, eum quos aspernatur ipsum ab necessitatibus voluptates?
      Perspiciatis, velit."
        imageComponent={Coin}
      />
      <Button
        text="Back"
        onClick={() => navigate(-1)}
        isDark
        customClass={styles.button}
      />
    </div>
  );
};

export default About;
