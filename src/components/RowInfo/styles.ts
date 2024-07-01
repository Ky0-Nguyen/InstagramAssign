import {StyleSheet} from 'react-native';
const HEGIHT_FOOTER = 48;
export const ICON_COLOR = '#FFFFFF';
export default StyleSheet.create({
  avatarContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  container: {
    paddingLeft: 16,
    width: '100%',
    height: HEGIHT_FOOTER + 16,
    padding: 10,
    left: 0,
    bottom: 20,
  },
  topContainer: {
    flexDirection: 'row',
  },
  userText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: ICON_COLOR,
  },
  musicText: {
    fontSize: 14,
    color: '#ffffff',
  },
  captionText: {
    bottom: 0,
    marginTop: 16,
    color: ICON_COLOR,
  },
});
