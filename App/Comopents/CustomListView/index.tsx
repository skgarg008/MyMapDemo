import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { styles } from './styles';

interface IProps {
  list: any[];
  error?: string;
  renderItem: ListRenderItem<any> | null | undefined;
}
const CustomListView: React.FC<IProps> = ({ list = [], renderItem, error }) => {
  const viewEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{error || 'No items found'}</Text>
      </View>
    );
  };
  return (
    <FlatList
      style={styles.container}
      data={list}
      renderItem={renderItem}
      ListEmptyComponent={viewEmptyComponent()}
    />
  );
};

export default CustomListView;
