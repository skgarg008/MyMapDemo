import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

type CustomButtonProps = {
  children: React.ReactNode;
  bg?: string;
  style?: StyleProp<ViewStyle>;
};

const SafeAreaView: React.FC<CustomButtonProps> = ({ children, bg, style }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bg ?? 'white',
          paddingBottom: useSafeAreaInsets().bottom,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default SafeAreaView;
