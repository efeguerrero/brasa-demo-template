//create a mock up data for pricing models. It should be an array of objects. Each plan should have a name, 4 features each and an annual and monthly price.

const pricingData = [
  {
    name: 'Basic',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    price: {
      monthly: 19.99,
      annually: 199.99,
    },
    popular: false,
  },
  {
    name: 'Standard',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    price: {
      monthly: 29.99,
      annually: 299.99,
    },
    popular: true,
  },
  {
    name: 'Premium',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    price: {
      monthly: 39.99,
      annually: 399.99,
    },
    popular: false,
  },
];

export default pricingData;
