export interface ICustomer {
  occupation: string;
  name: string;
}

export interface ICompany {
  country: string;
  workersAmount: string;
  name: string;
}

export interface ICustomerReview {
  review: string;
  company: ICompany;
  customer: ICustomer;
  rate: number;
}
