import React from "react";
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
  return modal === "donate" ? (
    <div className={styles.container}>
      <h1 className={styles.title}>Donation</h1>
      <form
        action=""
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          setModal(null);
        }}
      >
        <label className={styles.label}>
          Payment method
          <input className={styles.input} type="text" />
        </label>
        <label className={styles.label}>
          Placeholder name
          <input className={styles.input} type="text" />
        </label>
        <label className={styles.label}>
          Card number
          <input className={styles.input} type="number" />
        </label>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            MM/YY
            <input className={styles.input} type="number" />
          </label>
          <label className={styles.label}>
            CVC
            <input className={styles.input} type="number" />
          </label>
        </div>
        <div className={styles.buttons}>
          <Button
            onClick={() => setModal(null)}
            text="Back"
            customClass={styles.button}
          />
          <Button
            onClick={() => setModal("donateSuccess")}
            text="Donate"
            customClass={styles.button}
            isDark
          />
        </div>
      </form>
    </div>
  ) : null;
};

const MSTP = ({ modal }: StateType) => ({ modal });

const MDTP = { setModal };

export default connect(MSTP, MDTP)(DonateModal);
