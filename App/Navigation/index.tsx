import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../Api/store';
import HomeScreen from '../Screens/HomeScreen';
import MapViewScreen, { IMapViewScreenProps } from '../Screens/MapViewScreen';
import SeacrhLocationScreen from '../Screens/SeacrhLocationScreen';

const Stack = createNativeStackNavigator();

const MyNavigation = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen
              name="MapView"
              component={MapViewScreen}
              options={{ title: 'Map View' }}
            />
            <Stack.Screen
              name="SeacrhLocation"
              component={SeacrhLocationScreen}
              options={{ title: 'Place Search' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default MyNavigation;

// types.ts
export type RootStackParamList = {
  Home: undefined;
  MapView: IMapViewScreenProps | undefined;
  SeacrhLocation: undefined;
  // Add other screens here
};

export type NavigationProps = NavigationProp<RootStackParamList>;
