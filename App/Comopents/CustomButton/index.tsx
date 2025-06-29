import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type IProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
};

const CustomButton: React.FC<IProps> = ({
  title = '',
  onPress = undefined,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
