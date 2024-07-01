import {Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

type Props = {
  data: any;
  profilePicUrl?: any;
  name?: any;
  text?: any;
  comment?: any;
  mode?: 'light' | 'dark';
  position?: 'absolute' | 'relative';
};
const ICON_COLOR = '#FFFFFF';
const RowInfo = (props: Props) => {
  const {
    profilePicUrl,
    name,
    text,
    comment,
    mode = 'light',
    position = 'absolute',
  } = props;
  return (
    <View style={StyleSheet.flatten([styles.container, {position}])}>
      <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatarContainer} source={{uri: profilePicUrl}} />
        </View>
        <View>
          <Text
            style={StyleSheet.flatten([
              styles.userText,
              {color: mode === 'dark' ? '#111' : ICON_COLOR},
            ])}>
            {name}
          </Text>
          <Text
            style={StyleSheet.flatten([
              styles.musicText,
              {color: mode === 'dark' ? '#111' : ICON_COLOR},
            ])}>
            {comment}
          </Text>
        </View>
      </View>
      <Text
        style={StyleSheet.flatten([
          styles.captionText,
          {color: mode === 'dark' ? '#111' : ICON_COLOR},
        ])}>
        {text}
      </Text>
    </View>
  );
};

export default memo(RowInfo);
