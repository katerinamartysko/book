export interface General {
  firstName?: string;
  lastName: string;
  avatar: string;
}
interface Job {
  company: string;
  title: string;
}
interface Contact {
  email: string;
  phone: string;
}
interface Address {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}
export interface ClientList {
  id: number;
  general: General;
}
export interface Client extends ClientList {
  job: Job;
  contact: Contact;
  address: Address;
}
