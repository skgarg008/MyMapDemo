import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IModelAddress } from '../../../../Api/Models/IModelAddress';
import { styles } from './styles';

type IProps = {
  item: IModelAddress;
  isAdded: boolean;
  onPress?: (item: IModelAddress) => void;
};

const ViewAddressTitle: React.FC<IProps> = ({
  item,
  onPress,
  isAdded = false,
}) => {
  //State
  const [isAdd, setIsAdded] = React.useState(isAdded);

  React.useEffect(() => {
    setIsAdded(isAdded);
  }, [isAdded]);

  //Actions

  const handleAdd = () => {
    setIsAdded(i => !i);
    if (onPress) {
      onPress(item);
    }
  };

  //Render
  return (
    <View
      style={[styles.container, isAdd && { backgroundColor: 'lightgreen' }]}
    >
      <View style={styles.containerC}>
        <Text style={styles.title}>{item.name}</Text>
        <Text numberOfLines={0} style={styles.description}>
          {item.address}
        </Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>{!isAdd ? 'Add' : 'Remove'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewAddressTitle;
