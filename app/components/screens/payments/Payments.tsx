import React, {FC} from 'react';
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
    </Layout>
  );
};

export default Payments;
