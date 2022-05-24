import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setModal } from "ducks/actions";
import { Button } from "components";
import Default from "assets/images/default.svg";
import styles from "./project.module.scss";

type OwnProps = {
  type: string;
};

type DispatchProps = typeof MDTP;

const Project: React.FC<OwnProps & DispatchProps> = ({ type, setModal }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <img src={Default} alt="" className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.title}>About this author</h2>
        <div className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nisi
          maxime eveniet eius earum laudantium laborum aut, odit possimus sit
          facere alias fuga at consequatur adipisci soluta numquam. Omnis
          officia explicabo vitae odio id sint deleniti dolores atque ratione
          corrupti, harum accusamus, esse totam recusandae ut rerum quo
          laudantium veniam. Sapiente consequatur labore nihil, odio aspernatur
          adipisci iste et. Quaerat itaque hic, nesciunt dignissimos accusamus
          libero voluptate eveniet eum? Magnam iusto et veritatis deserunt
          explicabo? Neque a dolore facere eum.
        </div>
        <div className={styles.buttons}>
          <Button onClick={() => navigate("/")} text="Home" />
          <Button onClick={() => setModal("donate")} text="Donate" isDark />
        </div>
      </div>
    </div>
  );
};

const MDTP = { setModal };

export default connect(null, MDTP)(Project);
