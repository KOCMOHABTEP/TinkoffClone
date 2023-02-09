import {ScrollView, View} from 'react-native';
import {useContacts} from '../../../../hooks/useContacts';
import styles from './styles';
import ContactsItem from './ContactsItem';
import Loader from '../../../ui/Loader';
import SubHeading from '../../../ui/SubHeading';

const Contacts = () => {
  const {contacts, isLoading} = useContacts();

  return (
    <View style={styles.container}>
      <SubHeading text="Phone transfers" />
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          {contacts.map(contact => (
            <ContactsItem key={contact._id} contact={contact} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Contacts;
