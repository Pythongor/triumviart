import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";

type OwnProps = {
  text: string;
  onClick?: () => void;
  isDark?: boolean;
  customClass?: string;
  link?: string;
};

const Button: React.FC<OwnProps> = ({
  text,
  onClick,
  isDark = false,
  customClass,
  link,
}) => {
  return link ? (
    <Link
      to={link}
      className={cn(
        styles.button,
        { [styles.button_dark]: isDark },
        customClass || null
      )}
      onClick={onClick}
    >
      {text}
    </Link>
  ) : (
    <button
      className={cn(
        styles.button,
        { [styles.button_dark]: isDark },
        customClass || null
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
