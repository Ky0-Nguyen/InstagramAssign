import React, {useCallback, useMemo} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import {PostCard} from 'components';
import {ItemPost} from 'core/types';
import {useHomeFunctions} from './useFunctions';

const {height} = Dimensions.get('window');
const HomeScreen: React.FC = () => {
  const {
    posts,
    status,
    onRefresh,
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
    <View style={styles.container}>
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
        ListHeaderComponent={
          status === 'loading' ? (
            <ActivityIndicator size={30} color={'tomato'} />
          ) : (
            <View />
          )
        }
        refreshing={false}
        onRefresh={onRefresh}
        removeClippedSubviews
        initialNumToRender={1} // Number of items to render initially
        maxToRenderPerBatch={1} // Number of items rendered per batch
        windowSize={1} // Number of windows ahead to render items
        // snapToInterval={height - tabBarHeight}
        showsVerticalScrollIndicator={false}
        {...(Platform.OS === 'android' && {
          snapToInterval: height - tabBarHeight,
        })}
        decelerationRate="fast"
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        style={styles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
});
