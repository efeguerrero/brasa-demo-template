import React from 'react';

//styles Import
import styles from './toggleBtn.module.scss';

const ToggleBtn = ({ handlePlan, planPayment }) => {
  return (
    <div onClick={() => handlePlan()} className={styles.headerBtnContainer}>
      <button className={styles.headerBtn}>Monthly</button>
      <button className={styles.headerBtn}>Annually</button>
    </div>
  );
};

export default ToggleBtn;
