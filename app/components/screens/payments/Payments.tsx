import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Layout} from '../../layout/Layout';
import Heading from '../../ui/Heading';
import Contacts from './Contacts';
import Other from './Other';

const Payments: FC = () => {
  return (
    <Layout>
      <Heading text={'Payments'} />
      <Contacts />
      <Other />
      <Text>Payments</Text>
    </Layout>
  );
};

export default Payments;
