import {Text, View} from 'react-native';
import {useAccounts} from '../../../hooks/useAccounts';
import Padding from '../Padding';
import Loader from '../Loader';
import {Fragment} from 'react';
import AccountItem from './AccountItem';

const Accounts = () => {
  const {accounts, isLoading} = useAccounts();

  return (
    <Padding>
      {isLoading ? (
        <Loader />
      ) : accounts.length ? (
        accounts.map(account => (
          <Fragment key={account._id}>
            <AccountItem account={account} />
          </Fragment>
        ))
      ) : (
        <Text>You dont have cards</Text>
      )}
    </Padding>
  );
};

export default Accounts;
