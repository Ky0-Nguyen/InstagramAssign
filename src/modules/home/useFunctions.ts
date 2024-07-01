import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {DataPost} from 'core/types';
import {useEffect, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from 'stores';
import {AppDispatch, RootState} from 'stores/store';

export const useHomeFunctions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts: DataPost | null = useSelector(
    (state: RootState) => state.instagram.posts,
  );
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
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
    tabBarHeight,
    currentIndex,
    viewabilityConfig,
    handleViewableItemsChanged,
  };
};
