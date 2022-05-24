import React from "react";
import Liza from "assets/images/Liza.png";
import Dimon from "assets/images/Dimon.png";
import Default from "assets/images/default.svg";
import Coin from "assets/images/coin.svg";
import styles from "./teamList.module.scss";

const members = [
  { name: "Yelyzaveta Drach", role: "UX designer, creator", src: Liza },
  { name: "Dmytro Drach", role: "Front-end developer", src: Dimon },
  { name: "Lorem ipsum", role: "Dolor sit amet", src: "" },
  { name: "Lorem ipsum", role: "Dolor sit amet", src: "" },
  { name: "Lorem ipsum", role: "Dolor sit amet", src: Coin },
];

const TeamList = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Our team</h2>
      <div className={styles.members}>
        {members.map(({ name, role, src }, index) => (
          <div className={styles.member} key={index}>
            <img src={src || Default} alt={name} className={styles.avatar} />
            <div className={styles.name}>{name}</div>
            <div className={styles.role}>{role}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
