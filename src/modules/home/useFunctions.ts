import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {DataPost} from 'core/types';
import {useEffect, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from 'stores';
import {AppDispatch, RootState} from 'stores/store';

export const useHomeFunctions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status: 'idle' | 'loading' | 'succeeded' | 'failed' = useSelector(
    (state: RootState) => state.instagram.status,
  );
  const posts: DataPost | null = useSelector(
    (state: RootState) => state.instagram.posts,
  );

  const onRefresh = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);
  const tabBarHeight = useBottomTabBarHeight();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleViewableItemsChanged = useCallback(
    ({viewableItems}: any): void => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index);
      }
    },
    [],
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  return {
    posts,
    status,
    onRefresh,
    tabBarHeight,
    currentIndex,
    viewabilityConfig,
    handleViewableItemsChanged,
  };
};
