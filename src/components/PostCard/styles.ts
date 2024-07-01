import {Dimensions, StyleSheet} from 'react-native';

const HEGIHT_FOOTER = 48;
const {height} = Dimensions.get('window');
const ICON_COLOR = '#FFFFFF';
export default StyleSheet.create({
  container: {
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  itemCommentBase: {
    marginTop: 16,
  },
  avatarContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  //   avatar: {
  //     height: 48,
  //     width: 48,
  //     borderRadius: 24,
  //   },
  videoContainerThumb: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  modaBase: {
    margin: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    maxHeight: '90%',
    minHeight: '70%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  footer: {
    paddingLeft: 16,
    width: '100%',
    height: HEGIHT_FOOTER + 16,
    padding: 10,
    position: 'absolute',
    left: 0,
    bottom: 20,
  },
  topFooter: {
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
  stats: {
    position: 'absolute',
    justifyContent: 'space-around',
    bottom: 16 + HEGIHT_FOOTER,
    right: 16,
  },
  statText: {
    fontSize: 14,
    color: ICON_COLOR,
  },
  statItem: {
    marginTop: 16,
    alignItems: 'center',
  },
  captionText: {
    bottom: 0,
    marginTop: 16,
    color: ICON_COLOR,
  },
  imageThumb: {
    width: '100%',
    height: '100%',
  },
});
