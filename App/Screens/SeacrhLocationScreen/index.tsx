import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IModelAddress } from '../../Api/Models/IModelAddress';
import { addRemoveAddress, listAddress } from '../../Api/slices/authSlice';
import CustomListView from '../../Comopents/CustomListView';
import SafeAreaView from '../../Comopents/SafeAreaView';
import ViewAddressTitle from './Componets/ViewAddressTitle';
import { styles } from './styles';

import debounce from 'lodash.debounce';
import { NavigationProps } from '../../Navigation';
import ApiConstants from '../../Api/ApiConstants';

const SeacrhLocationScreen = () => {
  //Hooks
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();

  //Selectors
  const listAddressData = useSelector(listAddress);
  const listAddressIds = listAddressData.map(
    (address: IModelAddress) => address.placeId,
  );

  //Stats
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  //APi call to fetch results based on search term
  // Using Google Places API for demonstration purposes
  // You can replace this with your own API or mock data
  const fetchResults = async (searchTerm: string) => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(ApiConstants.PLACE_API(searchTerm));

      const data = await response.json();
      const errorM = data?.error_message ?? '';

      if (errorM) {
        setError(errorM);
        setResults([]);
        return;
      }
      const listMaped = data.results?.map((result: any) => ({
        placeId: result.place_id,
        name: result.name,
        address: result.formatted_address,
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng,
      }));
      setError('');
      setResults(listMaped);
    } catch (error: any) {
      setError(error?.message || 'Failed to fetch results');
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    debouncedSearch(query);
  }, [query]);

  // Debounce the search function to avoid excessive API calls
  const debouncedSearch = useCallback(debounce(fetchResults, 500), []);

  // Navigate to Profile screen
  const onPressItem = (item: IModelAddress) => {
    dispatch(addRemoveAddress(item));
  };

  // Render item function for FlatList
  const renderItem = useCallback(
    (data?: any) => {
      return (
        <ViewAddressTitle
          item={data?.item}
          onPress={onPressItem}
          isAdded={listAddressIds.includes(data?.item?.placeId)}
        />
      );
    },
    [listAddressIds],
  );

  // Render the component
  // This component allows users to search for locations and displays the results in a list
  // Users can select a location to add it to their address list
  // The component uses a debounced search function to fetch results from the Google Places API
  return (
    <SafeAreaView>
      <TextInput
        autoFocus
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        returnKeyType="search"
        clearButtonMode="always"
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
      />
      {loading && <ActivityIndicator style={{ marginTop: 10 }} />}

      <CustomListView list={results} renderItem={renderItem} error={error} />
    </SafeAreaView>
  );
};

export default SeacrhLocationScreen;
