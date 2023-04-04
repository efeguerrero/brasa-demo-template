//This component will loop through pricingData array of objects and create a Plan component for each object. The Plan component will receive the price, name of each plan and features as props. The Plan component is in the same folder as this component. It will have a button to toggle a monthly or annually option which will determine which price is passed on as prop

import React, { useState } from 'react';

//Component Imports
import Plan from './Plan.jsx';
import ToggleBtn from './ToggleBtn.jsx';

//Data Import
import pricingData from './pricingData.js';

//styles import
import styles from './pricingDynamic.module.scss';

const PricingDynamic = () => {
  const [planPayment, setPlanPayment] = useState('monthly');

  console.log(planPayment);

  const handlePlan = () => {
    if (planPayment === 'monthly') {
      setPlanPayment('annually');
    } else {
      setPlanPayment('monthly');
    }

    console.log(planPayment);
  };
  return (
    <section className={styles.section}>
      <div id="pricing" className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>Pricing</h1>
        <p className={styles.headerText}>
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
        </p>
        <ToggleBtn handlePlan={handlePlan} planPayment={planPayment} />
      </div>
      <div className="mt-12">
        <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {pricingData.map((plan) => {
            const planPrice =
              planPayment === 'monthly'
                ? plan.price.monthly
                : plan.price.annually;
            return (
              <Plan
                price={planPrice}
                name={plan.name}
                features={plan.features}
                popular={plan.popular}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingDynamic;
