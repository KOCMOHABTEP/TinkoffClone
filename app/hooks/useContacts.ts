import {useState} from 'react';
import {IContacts} from '../components/screens/payments/Contacts/types';

export const useContacts = () => {
  const [contacts, setContacts] = useState<IContacts[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return {contacts, isLoading};
};
