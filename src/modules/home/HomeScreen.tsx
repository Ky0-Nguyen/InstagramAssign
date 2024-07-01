import React, {useCallback, useMemo} from 'react';
import {Dimensions, FlatList, Platform} from 'react-native';

import {PostCard} from 'components';
import {ItemPost} from 'core/types';
import {useHomeFunctions} from './useFunctions';

const {height} = Dimensions.get('window');
const HomeScreen: React.FC = () => {
  const {
    posts,
    currentIndex,
    tabBarHeight,
    viewabilityConfig,
    handleViewableItemsChanged,
  } = useHomeFunctions();

  const renderItem = useCallback(
    ({item, index}: {item: ItemPost; index: number}): React.JSX.Element => {
      return <PostCard item={item} isActive={currentIndex === index} />;
    },
    [currentIndex],
  );

  const listData = useMemo(() => {
    if (!posts?.items || posts?.items.length === 0) {
      return [];
    }
    return [...new Set(posts?.items.map((a: {id: any}) => a?.id))];
  }, [posts?.items]);

  return (
    <FlatList
      data={listData}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item}${index}`}
      pagingEnabled
      horizontal={false}
      getItemLayout={(data, index) => ({
        length: height - tabBarHeight,
        offset: (height - tabBarHeight) * index,
        index,
      })}
      removeClippedSubviews
      initialNumToRender={1} // Number of items to render initially
      maxToRenderPerBatch={1} // Number of items rendered per batch
      windowSize={1} // Number of windows ahead to render items
      showsVerticalScrollIndicator={false}
      {...(Platform.OS === 'android' && {
        snapToInterval: height - tabBarHeight,
      })}
      decelerationRate="fast"
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
    />
  );
};

export default HomeScreen;
