import { Clients } from '../../api/types';
import { AnyAction } from 'redux';

interface ClientsState {
  clients: Array<Clients>;
}
const INITIAL_STATE: ClientsState = {
  clients: [
    {
      id: 1,
      general: {
        firstName: 'Liana',
        lastName: 'Crooks',
        avatar:
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      },
      job: {
        company: 'Ledner, Johnson and Predovic',
        title: 'Investor Functionality Coordinator',
      },
      contact: {
        email: 'Gerry_Hackett77@gmail.com',
        phone: '(895) 984-0132',
      },
      address: {
        street: '1520 Zemlak Cove',
        city: 'New Devon',
        zipCode: '42586-7898',
        country: 'Guinea-Bissau',
      },
    },
    {
      id: 2,
      general: {
        firstName: 'Deontae',
        lastName: 'Dare',
        avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      },
      job: {
        company: "D'Amore, Dicki and Borer",
        title: 'International Applications Consultant',
      },
      contact: {
        email: 'Kellie.Marvin38@yahoo.com',
        phone: '1-615-843-3426 x600',
      },
      address: {
        street: '65901 Glover Terrace',
        city: 'Alden ton',
        zipCode: '57744-4248',
        country: 'Kenya',
      },
    },
    {
      id: 3,
      general: {
        firstName: 'Cortez',
        lastName: 'Pacocha',
        avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      },
      job: {
        company: 'McKenzie Group',
        title: 'Forward Branding Developer',
      },
      contact: {
        email: 'Sage_Wiegand@hotmail.com',
        phone: '725.583.0926 x0430',
      },
      address: {
        street: '376 Reginald Dam',
        city: 'Port Enid fort',
        zipCode: '51294-8361',
        country: 'Belarus',
      },
    },
    {
      id: 4,
      general: {
        firstName: 'Geoffrey',
        lastName: 'Russel',
        avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
      },
      job: {
        company: 'Nienow and Sons',
        title: 'Central Intranet Designer',
      },
      contact: {
        email: 'Daron.Bartoletti9@gmail.com',
        phone: '646.580.9390',
      },
      address: {
        street: '5050 Iva Extensions',
        city: 'Madonna burgh',
        zipCode: '74470-6362',
        country: 'Fiji',
      },
    },
  ],
};

export const clientsReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
