import React, {useState} from 'react';
import {View, TextInput, FlatList, ActivityIndicator} from 'react-native';

import styles from './styles';
import {UserCard} from 'components';
import {fetchUserSearchResults} from 'stores';
import {AppDispatch, RootState} from 'stores/store';
import {useDispatch, useSelector} from 'react-redux';

const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const searchResults = useSelector(
    (state: RootState) => state.instagram.searchResults,
  );

  const status: 'idle' | 'loading' | 'succeeded' | 'failed' = useSelector(
    (state: RootState) => state.instagram.status,
  );

  const handleSearch = () => {
    dispatch(fetchUserSearchResults(query));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for users"
        value={query}
        style={styles.inputSearch}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <View style={styles.listContainer}>
        {status === 'loading' ? (
          <ActivityIndicator size={30} color={'tomato'} />
        ) : (
          <FlatList
            data={searchResults?.items}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <UserCard user={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
