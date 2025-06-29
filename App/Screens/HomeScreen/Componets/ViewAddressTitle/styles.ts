import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: 700,
  },
  description: {
    // marginTop:100,
    fontSize: 14,
    fontWeight: 500,
  },
});
