import React from "react";
import { Button } from "components";
import styles from "./section.module.scss";

type SectionType = {
  title: React.ReactNode;
  text: string;
  link?: { text: string; to: string };
  imageComponent?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const Section: React.FC<SectionType> = ({
  title,
  text,
  link,
  imageComponent: ImageComponent,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.text}>{text}</div>
          {link && (
            <Button link={link.to} text={link.text} customClass={styles.link} />
          )}
        </div>
        {ImageComponent && (
          <div className={styles.imageWrapper}>
            <ImageComponent className={styles.image} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
