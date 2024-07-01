import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useIsFocused} from '@react-navigation/native';
import {ItemPost} from 'core/types';
import {find} from 'lodash';
import {useState, useMemo, useEffect, useRef} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import {fetchComment} from 'stores';
import {AppDispatch, RootState} from 'stores/store';

export const usePostCardFunctions = (
  isActive: boolean,
  itemProps: string | number,
) => {
  const [isModalComment, setShowModalComment] = useState(false);
  const posts = useSelector((state: RootState) => state.instagram.posts);
  const comments = useSelector((state: RootState) => state.instagram.comments);
  const item: ItemPost | undefined = useMemo(
    () => find(posts?.items ?? [], i => i.id === itemProps),
    [itemProps, posts?.items],
  );
  const isFocused = useIsFocused();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (isActive) {
      dispatch(fetchComment(item?.code ?? ''));
    }
  }, [dispatch, isActive, item?.code]);

  const videoRef = useRef<any>(null);
  const opacity = useSharedValue(0);
  const videoUri = item?.video_url ?? '';
  const tabBarHeight = useBottomTabBarHeight();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isActive ? 1 : 0, {duration: 500}),
    };
  });

  const animatedThumbStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isActive ? 0 : 1, {duration: 500}),
    };
  });
  return {
    videoRef,
    opacity,
    videoUri,
    tabBarHeight,
    animatedStyle,
    animatedThumbStyle,
    isModalComment,
    setShowModalComment,
    comments,
    item,
    isFocused,
  };
};
