import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { StateType } from "ducks/types";
import { setModal } from "ducks/actions";
import { Button } from "components";
import styles from "./modals.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const DonateModal: React.FC<StateProps & DispatchProps> = ({
  modal,
  setModal,
}) => {
  const navigate = useNavigate();
  return modal === "donateSuccess" ? (
    <div className={styles.container}>
      <h1 className={styles.title}>Thank you! Payment is processing</h1>
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            setModal(null);
            navigate("/");
          }}
          text="Home"
          customClass={styles.button}
        />
        <Button
          onClick={() => setModal(null)}
          text="Back"
          customClass={styles.button}
          isDark
        />
      </div>
    </div>
  ) : null;
};

const MSTP = ({ modal }: StateType) => ({ modal });

const MDTP = { setModal };

export default connect(MSTP, MDTP)(DonateModal);
