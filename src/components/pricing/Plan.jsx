// create one component for a pricing plan and pass the price, name and features as props. Style it with tailwind. Don't worry about the toggle button for now. We will add that later. Dont add any icons.

import React from 'react';

//Style Import
import styles from './plan.module.scss';

const Plan = ({ price, name, features, popular }) => {
  return (
    <div className={styles.plan}>
      <div
        className={
          popular
            ? `${styles.planCenter} ${styles.planCenterPopular}`
            : styles.planCenter
        }
      >
        {popular ? <span class={styles.popularTag}>POPULAR</span> : null}
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>
          {price}
          <span className={styles.paymentTag}>/mo</span>
        </p>
        <ul className={styles.featuresContainer}>
          {features.map((feature) => {
            return (
              <li className={styles.feature}>
                <span className={styles.iconContainer}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    className={styles.icon}
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {feature}
              </li>
            );
          })}
        </ul>
        <button
          className={
            popular ? `${styles.btn} ${styles.popularBtn}` : styles.btn
          }
        >
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        <p className={styles.disclaimer}>
          Literally you probably haven't heard of them jean shorts.
        </p>
      </div>
    </div>
  );
};

export default Plan;
