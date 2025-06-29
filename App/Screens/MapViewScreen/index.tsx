import { Text } from 'react-native';
import SafeAreaView from '../../Comopents/SafeAreaView';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IModelAddress } from '../../Api/Models/IModelAddress';
import { RootStackParamList } from '../../Navigation';

export interface IMapViewScreenProps {
  item?: IModelAddress;
}

const MapViewScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'MapView'>>();
  const item: IModelAddress | undefined = route?.params?.item;

  return (
    <SafeAreaView>
      <MapView
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      ></MapView>
    </SafeAreaView>
  );
};

export default MapViewScreen;
