import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { StateType, LangType } from "ducks/types";
import { Link } from "react-router-dom";
import { setLanguage, setModal } from "ducks/actions";
import Logo from "assets/images/logo.svg";
import styles from "./header.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const languages: LangType[] = ["EN", "FR", "UK"];

const Header: React.FC<StateProps & DispatchProps> = ({
  language,
  setLanguage,
  setModal,
}) => {
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logoContainer}>
        <img src={Logo} className={styles.logo} alt="Triumviart logo" />
        <div className={styles.logoDescription}>Triumviart</div>
      </Link>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <button className={styles.link} onClick={() => setModal("donate")}>
          Donate
        </button>
        <Link to="/contact" className={styles.link}>
          Contact us
        </Link>
        <Link to="/about" className={styles.link}>
          About
        </Link>
      </div>
      <div className={styles.langSelect}>
        {languages.map((lang) => (
          <div
            className={cn(styles.langOption, {
              [styles.langOption_selected]: language === lang,
            })}
            onClick={() => setLanguage(lang)}
            key={lang}
          >
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
};

const MSTP = ({ language }: StateType) => ({ language });

const MDTP = { setLanguage, setModal };

export default connect(MSTP, MDTP)(Header);
