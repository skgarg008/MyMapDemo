import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
  },
  containerC: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    flex:1,
    fontSize: 16,
    fontWeight: 700,
  },
  description: {
    flex:1,
    // marginTop:100,
    fontSize: 14,
    fontWeight: 500,
  },

  //
  addButton: {
    backgroundColor: 'black',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
