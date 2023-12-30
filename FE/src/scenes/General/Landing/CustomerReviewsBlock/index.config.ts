import { ICustomerReview } from './index.types';

export const reviews: ICustomerReview[] = [
  {
    review:
      'So happy to find such creative and organized spicialists. They helped me to plan wedding for 10 months and were pacient to my desires.',
    rate: 5,
    company: {
      name: '2 days',
      country: 'Germany',
      workersAmount: '50 person',
    },
    customer: {
      name: 'Kristy',
      occupation: 'Wedding',
    },
  },
  {
    review:
      "My company new year corporate was topic to discuss for weeks after event. I was terified to pick up 1 day skiing trip to my employees, but wanted something special. It was hard to do, but we did it.",
    rate: 5,
    company: {
      name: '1 day',
      country: 'Germany',
      workersAmount: '136 person',
    },
    customer: {
      name: 'Tony',
      occupation: 'Corporate',
    },
  },
];
