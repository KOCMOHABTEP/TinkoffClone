import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Header from '../../ui/Header';
import {Layout} from '../../layout/Layout';
import Stories from '../../ui/Stories';

const Home: FC = () => {
  return (
    <Layout>
      <Header />
      <Stories />
    </Layout>
  );
};

export default Home;
