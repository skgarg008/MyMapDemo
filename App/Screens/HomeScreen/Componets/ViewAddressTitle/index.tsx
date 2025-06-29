import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IModelAddress } from '../../../../Api/Models/IModelAddress';
import { styles } from './styles';

type IProps = {
  item: IModelAddress;
  onPress?: (item: IModelAddress) => void;
};

const ViewAddressTitle: React.FC<IProps> = ({ item, onPress }) => {
  //Props

  //Actions
  const handlePress = () => {
    if (onPress) {
      onPress(item);
    }
  };

  //Render
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.address}</Text>
    </TouchableOpacity>
  );
};

export default ViewAddressTitle;
