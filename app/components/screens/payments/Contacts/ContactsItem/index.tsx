import {Pressable, Text, View} from 'react-native';
import {FC} from 'react';
import {IContacts} from '../types';
import styles from './styles';
import Avatar from '../../../../ui/Avatar';

const ContactsItem: FC<{contact: IContacts}> = ({contact}) => {
  return (
    <Pressable style={styles.container}>
      <Avatar size={'large'} name={contact.displayName} />
      <Text style={styles.label}>{contact.displayName}</Text>
    </Pressable>
  );
};

export default ContactsItem;
