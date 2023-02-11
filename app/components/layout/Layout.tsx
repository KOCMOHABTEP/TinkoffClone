import React, {FC, ReactNode} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import styles from './styles';

interface ILayout {
  children: ReactNode;
  isScrollView?: boolean;
}

export const Layout: FC<ILayout> = ({children, isScrollView = true}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {isScrollView ? <ScrollView>{children}</ScrollView> : children}
      </View>
    </SafeAreaView>
  );
};
