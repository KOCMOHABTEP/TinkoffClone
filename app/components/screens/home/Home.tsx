import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Header from '../../ui/Header';
import {Layout} from '../../layout/Layout';

const Home: FC = () => {
  return (
    <View>
      <Header />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
