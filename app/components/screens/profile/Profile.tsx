import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useProfile} from '../../../hooks/useProfile';
import {Layout} from '../../layout/Layout';
import Heading from '../../ui/Heading';
import Padding from '../../ui/Padding';
import Loader from '../../ui/Loader';
import Field from '../../ui/Field';
import {Button} from '../../ui/Button';
import {useAuth} from '../../../hooks/useAuth';
import {UI_GREY_200} from '../../../styles';

const Profile: FC = () => {
  const {logout} = useAuth();
  const {isLoading: isProfileLoading, name, setName} = useProfile();

  return (
    <Layout>
      <Heading text={'Profile'} isCenter={true} />
      <Padding>
        {isProfileLoading ? (
          <Loader />
        ) : (
          <>
            <Field onChange={setName} val={name} placeholder={'No name'} />

            <Button onPress={() => {}} title={'Update profile'} />

            <Button
              onPress={logout}
              title={'Logout'}
              colors={[UI_GREY_200, '#D6D8DB']}
            />
          </>
        )}
      </Padding>
      <Text>Profile</Text>
    </Layout>
  );
};

export default Profile;
