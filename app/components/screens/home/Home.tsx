import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Header from '../../ui/Header';
import {Layout} from '../../layout/Layout';

const Home: FC = () => {
  return (
    <Layout>
      <Header />
      <Text>Home</Text>
    </Layout>
  );
};

export default Home;
