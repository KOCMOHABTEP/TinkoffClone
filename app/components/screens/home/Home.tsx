import React, {FC} from 'react';
import Header from '../../ui/Header';
import {Layout} from '../../layout/Layout';
import Stories from '../../ui/Stories';
import Accounts from './Accounts';
import Index from './ApplyNewProducts';

const Home: FC = () => {
  return (
    <Layout>
      <Header />
      <Stories />
      <Accounts />
      <Index />
    </Layout>
  );
};

export default Home;
