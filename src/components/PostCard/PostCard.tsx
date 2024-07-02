import React, {useCallback, useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';

import styles from './styles';
import {RowInfo} from 'components';
import Modal from 'react-native-modal';
// import Video from 'react-native-video';
import {formatKNumber} from 'core/utils';
import {ItemComment} from 'core/types';
import Animated from 'react-native-reanimated';
import {usePostCardFunctions} from './useFunctions';
import VideoPlayer from 'react-native-media-console';
import {useAnimations} from '@react-native-media-console/reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';

const {height} = Dimensions.get('window');
const ICON_COLOR = '#FFFFFF';

interface ReelsItemProps {
  item: any;
  isActive: boolean;
}

const PostCard: React.FC<ReelsItemProps> = ({item: itemProps, isActive}) => {
  const {
    tabBarHeight,
    animatedStyle,
    item,
    animatedThumbStyle,
    videoRef,
    videoUri,
    opacity,
    setShowModalComment,
    isModalComment,
    comments,
    isFocused,
  } = usePostCardFunctions(isActive, itemProps);
  useEffect(() => {
    if (!isFocused && videoRef.current) {
      videoRef.current.pause(); // Dừng video
    }
  }, [isFocused, videoRef]);
  const renderCommentItem = useCallback(
    ({item: commentItem}: {item: ItemComment}) => {
      return (
        <View style={styles.itemCommentBase}>
          <RowInfo
            profilePicUrl={commentItem?.user?.profile_pic_url}
            name={commentItem?.user?.full_name}
            text={''}
            comment={commentItem?.text}
            data={undefined}
            mode={'dark'}
            position="relative"
          />
        </View>
      );
    },
    [],
  );

  const heightContainer = Platform.select({
    ios: {height: height - tabBarHeight},
    android: {height: height - tabBarHeight},
  });

  return (
    <View style={StyleSheet.flatten([styles.container, heightContainer])}>
      <Animated.View style={[styles.videoContainerThumb, animatedThumbStyle]}>
        <Image source={{uri: item?.thumbnail_url}} style={styles.imageThumb} />
      </Animated.View>
      <Animated.View style={[styles.videoContainer, animatedStyle]}>
        <VideoPlayer
          videoRef={videoRef}
          useAnimations={useAnimations}
          source={{uri: videoUri}}
          style={styles.video}
          resizeMode="cover"
          repeat
          disableSeekButtons={true}
          disableSeekbar
          disableVolume
          disableBack
          disableFullscreen
          paused={!isActive}
          onLoad={() => (opacity.value = 1)}
        />
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Icon name="heart" size={20} color={ICON_COLOR} />
            <Text style={styles.statText}>
              {formatKNumber(item?.like_count ?? 0)}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setShowModalComment(prev => !prev)}>
            <View style={styles.statItem}>
              <Icon name="comment" size={20} color={ICON_COLOR} />
              <Text style={styles.statText}>
                {formatKNumber(item?.comment_count ?? 0)}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.statItem}>
            <Icon name="share" size={20} color={ICON_COLOR} />
            <Text style={styles.statText}>
              {formatKNumber(item?.reshare_count ?? 0)}
            </Text>
          </View>
        </View>
        <RowInfo
          profilePicUrl={item?.user?.profile_pic_url}
          name={item?.user?.full_name}
          text={item?.caption?.text}
          comment={'Original audio'}
          data={undefined}
          mode={'light'}
        />
      </Animated.View>
      <Modal
        isVisible={isModalComment}
        backdropOpacity={0}
        style={styles.modaBase}
        // swipeDirection={'down'}
        // propagateSwipe={true}
        swipeThreshold={16}
        onBackdropPress={() => setShowModalComment(false)}
        onSwipeComplete={() => setShowModalComment(false)}
        statusBarTranslucent>
        <View style={styles.modalContainer}>
          <View style={{height: 50, width: '100%'}} />
          <FlatList
            data={comments?.items ?? []}
            extraData={comments?.items}
            renderItem={renderCommentItem}
            style={{flex: 1}}
          />
        </View>
      </Modal>
    </View>
  );
};

export default React.memo(PostCard);
