import React, {FC, ReactNode} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles';

interface ILayout {
  children: ReactNode;
  isScrollView?: boolean;
}

export const Layout: FC<ILayout> = ({children, isScrollView = true}) => {
  return (
    <View style={styles.container}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};
