import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPostDetails} from 'stores';
import {AppDispatch, RootState} from 'stores/store';

interface DetailScreenProps {
  route: {
    params: {
      postId: number;
    };
  };
}

const DetailScreen: React.FC<DetailScreenProps> = ({route}) => {
  const {postId} = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const postDetails = useSelector(
    (state: RootState) => state.instagram.postDetails,
  );

  useEffect(() => {
    dispatch(fetchPostDetails(postId));
  }, [dispatch, postId]);

  if (!postDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{postDetails.description}</Text>
      {/* Display other post details */}
    </View>
  );
};

export default DetailScreen;
