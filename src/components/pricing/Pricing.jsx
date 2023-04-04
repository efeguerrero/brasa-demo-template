//Use this component for static pricing plans or dynamic ones where there is a discount between monthly or yearly prices. In case prices ar static, dont render the toggle button and avoid loading ANY JS.

import React, { useState } from 'react';

//Component Imports
import Plan from './Plan.jsx';
import ToggleBtn from './ToggleBtn.jsx';

//Data Import
import pricingData from './pricingData.js';

//styles import
import styles from './pricing.module.scss';

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
        {/* Use this toggle button to handle dynamic pricing between monthly or yearly plans. If price is static comment it out and dont render it */}
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
                planPayment={planPayment}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingDynamic;
