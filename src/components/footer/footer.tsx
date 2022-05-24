import React from "react";
import { connect } from "react-redux";
// import { LoginForm } from "..";
import { Link } from "react-router-dom";
import { StateType } from "ducks/types";
import FacebookLogo from "assets/images/facebook.svg";
import InstagrammLogo from "assets/images/instagramm.svg";
import TwitterLogo from "assets/images/twitter.svg";
import styles from "./footer.module.scss";

type StateProps = ReturnType<typeof MSTP>;

const links = [
  {
    title: "about",
    sublinks: [
      { name: "contact us", reference: "/contact" },
      { name: "our team", reference: "/team" },
      { name: "join us", reference: "/join" },
    ],
  },
  {
    title: "services",
    sublinks: [
      { name: "partners", reference: "/partners" },
      { name: "donations", reference: "/donations" },
      { name: "help", reference: "/help" },
    ],
  },
  {
    title: "legal",
    sublinks: [
      { name: "terms", reference: "/terms" },
      { name: "privacy", reference: "/privacy" },
      { name: "help", reference: "/help" },
    ],
  },
  {
    title: "art",
    sublinks: [
      { name: "view categories", reference: "/partners" },
      { name: "about our artists", reference: "/donations" },
      { name: "children and war", reference: "/help" },
    ],
  },
];

const followLinks = [
  { src: FacebookLogo, reference: "https://google.com", alt: "facebook" },
  { src: InstagrammLogo, reference: "https://google.com", alt: "instagramm" },
  { src: TwitterLogo, reference: "https://google.com", alt: "twitter" },
];

const Footer: React.FC<StateProps> = ({ token }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        {links.map(({ title, sublinks }) => (
          <div className={styles.section} key={title}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            {sublinks.map(({ name, reference }) => (
              <Link className={styles.link} to={reference} key={name}>
                {name}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.followContainer}>
        <div className={styles.followLinks}>
          {followLinks.map(({ src, reference, alt }) => (
            <a href={reference} key={alt}>
              <img src={src} className={styles.followLink} alt={alt} />
            </a>
          ))}
        </div>
        <div className={styles.followText}>follow us</div>
      </div>
    </div>
  );
};

const MSTP = ({ token }: StateType) => ({ token });

export default connect(MSTP)(Footer);
