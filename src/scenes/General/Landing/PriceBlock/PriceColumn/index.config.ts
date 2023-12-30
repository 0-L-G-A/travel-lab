import { TitleCodes } from 'scenes/General/Landing/LandingBlockTitle/index.config';

const langBlock = `${TitleCodes.PRICE}.BENEFITS`;

export const priceTitleCodes = {
  ESSENTIALS: {
    title: `${TitleCodes.PRICE}.ESSENTIALS.TITLE`,
    description: `${TitleCodes.PRICE}.ESSENTIALS.DESCRIPTION`,
    price: '100'
  },
  STANDARD: {
    title: `${TitleCodes.PRICE}.STANDARD.TITLE`,
    description: `${TitleCodes.PRICE}.STANDARD.DESCRIPTION`,
    price: '200'
  },
  PRO: {
    title: `${TitleCodes.PRICE}.PRO.TITLE`,
    description: `${TitleCodes.PRICE}.PRO.DESCRIPTION`,
    price: '500'
  },
  BENEFITS: [
    { id: 1, text: `${langBlock}.ROUTES` },
    { id: 2, text: `${langBlock}.TRACK_DRIVERS` },
    { id: 3, text: `${langBlock}.PROOF_OF_DELIVERY` },
    { id: 4, text: `${langBlock}.CUSTOMER_NOTIFICATIONS` },
  ],
};
