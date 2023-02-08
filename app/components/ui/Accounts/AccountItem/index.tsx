import {Text, View} from 'react-native';
import {FC} from 'react';
import {IAccount} from '../../../../types/IAccount';

const AccountItem: FC<{account: IAccount}> = ({account}) => {
  return (
    <View>
      <Text>{account.name}</Text>
    </View>
  );
};

export default AccountItem;
