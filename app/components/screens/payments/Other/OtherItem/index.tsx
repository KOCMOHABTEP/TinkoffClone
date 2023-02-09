import {Text, View} from 'react-native';
import {FC} from 'react';
import {IOtherItem} from '../types';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const OtherItem: FC<{item: IOtherItem}> = ({item}) => {
  return (
    <View>
      <FontAwesome5Icon name={item.iconName} />
      <Text>{item.title}</Text>
    </View>
  );
};

export default OtherItem;
