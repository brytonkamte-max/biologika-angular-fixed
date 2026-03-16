export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  marketingConsent: boolean;
  firstOrder: boolean;
  registrationDate: string;
  isAdmin?: boolean;
}
