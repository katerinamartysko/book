interface General {
  firstName: string;
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
export interface Clients {
  id: number;
  job: Job;
  general: General;
  contact: Contact;
  address: Address;
}
