import { useNavigation } from '@react-navigation/native';
import { showLocation } from 'react-native-map-link';
import { useDispatch, useSelector } from 'react-redux';
import { listAddress } from '../../Api/slices/authSlice';
import CustomButton from '../../Comopents/CustomButton';
import CustomListView from '../../Comopents/CustomListView';
import SafeAreaView from '../../Comopents/SafeAreaView';
import ViewAddressTitle from './Componets/ViewAddressTitle';
import { IModelAddress } from '../../Api/Models/IModelAddress';
import { NavigationProps } from '../../Navigation';

const HomeScreen = () => {
  // Hooks
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();

  // Selectors
  const listAddressData = useSelector(listAddress);
  console.log('listAddressData', JSON.stringify(listAddressData));

  // Render item function for FlatList
  const renderItem = (item: any) => (
    <ViewAddressTitle item={item.item} onPress={onPressItem} />
  );

  // Navigate to Profile screen
  const onPressItem = (item: IModelAddress) => {
    showLocation({
      latitude: item.latitude,
      longitude: item.longitude,
      title: item.address,
    });
  };

  const onPressAdd = () => {
    navigation.navigate('SeacrhLocation');
  };

  // Render the component
  // This component displays a list of addresses and allows users to add a new address
  // Users can select an address to view it on a map
  return (
    <SafeAreaView>
      <CustomListView list={listAddressData} renderItem={renderItem} />
      <CustomButton title="Add New address" onPress={onPressAdd} />
    </SafeAreaView>
  );
};

export default HomeScreen;
