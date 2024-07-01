import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },
  inputSearch: {
    height: 48,
    borderWidth: 1,
    borderRadius: 16,
    width: width - 32,
    marginHorizontal: 16,
    paddingHorizontal: 8,
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
