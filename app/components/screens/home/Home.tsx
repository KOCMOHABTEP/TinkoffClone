import React, {FC} from 'react';
import Header from '../../ui/Header';
import {Layout} from '../../layout/Layout';
import Stories from '../../ui/Stories';
import Accounts from './Accounts';
import ApplyNewProducts from './ApplyNewProducts';

const Home: FC = () => {
  return (
    <Layout>
      <Header />
      <Stories />
      <Accounts />
      <ApplyNewProducts />
    </Layout>
  );
};

export default Home;
