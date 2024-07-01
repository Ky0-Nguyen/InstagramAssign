import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {DataComment, DataPost, DataSearch} from 'core/types';
import {
  getPosts,
  searchUser,
  getPostDetails,
  Post,
  getComment,
} from 'services/api';

interface PostsState {
  posts: DataPost | null;
  comments: DataComment | null;
  searchResults: DataSearch | null;
  postDetails: Post | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: null,
  comments: null,
  searchResults: null,
  postDetails: null,
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (): Promise<Post[]> => {
    const response = await getPosts();
    return response;
  },
);

export const fetchComment = createAsyncThunk(
  'posts/fetComments',
  async (code: string) => {
    const response = await getComment(code);
    return response;
  },
);

export const fetchUserSearchResults = createAsyncThunk(
  'posts/fetchUserSearchResults',
  async (username: string) => {
    console.log('username', username);
    if (username && username.length === 0) {
      return {items: []};
    }
    const response = await searchUser(username);
    return response;
  },
);

export const fetchPostDetails = createAsyncThunk(
  'posts/fetchPostDetails',
  async (postId: number) => {
    const response = await getPostDetails(postId);
    return response;
  },
);

const instagramSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<any>) => {
        state.posts = action.payload;
        state.status = 'succeeded';
      })
      .addCase(
        fetchUserSearchResults.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.searchResults = action.payload;
          state.status = 'succeeded';
        },
      )
      .addCase(
        fetchPostDetails.fulfilled,
        (state, action: PayloadAction<Post>) => {
          state.postDetails = action.payload;
          state.status = 'succeeded';
        },
      )
      .addCase(fetchComment.fulfilled, (state, action: PayloadAction<any>) => {
        state.comments = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchComment.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUserSearchResults.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPostDetails.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch posts';
      })
      .addCase(fetchComment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch comments';
      })
      .addCase(fetchUserSearchResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to search users';
      })
      .addCase(fetchPostDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch post details';
      });
  },
});

export default instagramSlice.reducer;
