import { createSlice } from '@reduxjs/toolkit';
import {
  addFromFilter,
  addToLibrary,
  getOwn,
  getRecommended,
} from './operations';

const initialState = {
  books: [],
  own: [],
  start: false,
  finished: false,
  reading: [],
  isLoading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getRecommended.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecommended.fulfilled, (state, action) => {
        state.books = action.payload;
        state.isLoading = false;
      })
      .addCase(getRecommended.rejected, state => {
        state.isLoading = false;
      })

      .addCase(addToLibrary.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToLibrary.fulfilled, (state, action) => {
        state.own.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addFromFilter.fulfilled, (state, action) => {
        state.own.push(action.payload);
        state.isLoading = false;
      })

      .addCase(getOwn.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOwn.fulfilled, (state, action) => {
        state.own = action.payload;
        state.isLoading = false;
      })
      .addCase(getOwn.rejected, state => {
        state.isLoading = false;
      });
    // .addCase(deleteFromLibrary.pending, state => {
    //   state.isLoading = true;
    // })
    // .addCase(deleteFromLibrary.fulfilled, (state, action) => {
    //   const index = state.own.findIndex(book => book._id === action.payload);
    //   state.own.splice(index, 1);
    // })
    // .addCase(deleteFromLibrary.rejected, state => {
    //   state.isLoading = false;
    // });
  },
});

export const booksReducer = booksSlice.reducer;
