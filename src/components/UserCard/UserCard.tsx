import {User} from 'core/types';
import React, {memo} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({user}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: user?.profile_pic_url}} style={styles.avatar} />
      <Text>{user.username}</Text>
    </View>
  );
};

export default memo(UserCard);
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 16,
    width: width - 32,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
});
