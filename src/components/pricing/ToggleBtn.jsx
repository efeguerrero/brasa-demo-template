import React from 'react';

//styles Import
import styles from './toggleBtn.module.scss';

const ToggleBtn = ({ handlePlan, planPayment }) => {
  return (
    <div onClick={() => handlePlan()} className={styles.headerBtnContainer}>
      <div
        className={
          planPayment === 'monthly'
            ? styles.sliderMonthly
            : styles.sliderAnnually
        }
      ></div>
      <button
        className={
          planPayment === 'monthly'
            ? `${styles.headerBtn} ${styles.headerBtnActive}`
            : styles.headerBtn
        }
      >
        Monthly
      </button>
      <button
        className={
          planPayment === 'annually'
            ? `${styles.headerBtn} ${styles.headerBtnActive}`
            : styles.headerBtn
        }
      >
        Annually
      </button>
    </div>
  );
};

export default ToggleBtn;
