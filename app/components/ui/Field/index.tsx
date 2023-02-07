import {FC} from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

const Field: FC<IField> = ({onChange, val, placeholder, isSecure}) => {
  return (
    <TextInput
      style={styles.root}
      placeholder={placeholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      showSoftInputOnFocus={false}
      autoCapitalize={'none'}
    />
  );
};

export default Field;
