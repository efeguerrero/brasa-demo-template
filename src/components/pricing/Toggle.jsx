//Create a toggle component styled with tailwind. It will be able to switch between a monthly or annual option. Default is monthly. On toggle it will executed a function that is passed as prop from the parent component. The function will change the state of the parent component which will determine which price is passed as prop to the Plan component. The Plan component is in the same folder as this component. It will have a button to toggle a monthly or annually option which will determine which price is passed on as prop

import React from 'react';

const Toggle = ({ handlePlan }) => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="text-xs text-gray-700 font-semibold tracking-wide uppercase">
        Monthly
      </div>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          onClick={() => handlePlan()}
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <div className="text-xs text-gray-700 font-semibold tracking-wide uppercase">
        Annually
      </div>
    </div>
  );
};

export default Toggle;
