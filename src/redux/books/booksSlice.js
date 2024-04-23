import { createSlice } from '@reduxjs/toolkit';
import {
  addFromFilter,
  addToLibrary,
  deleteFromLibrary,
  deleteStat,
  getOwn,
  getRecommended,
  startReading,
  stopReading,
} from './operations';

const initialState = {
  books: [],
  own: [],
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
      })
      .addCase(deleteFromLibrary.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteFromLibrary.fulfilled, (state, action) => {
        state.own = state.own.filter(book => book._id !== action.payload);
      })
      .addCase(deleteFromLibrary.rejected, state => {
        state.isLoading = false;
      })
      .addCase(startReading.fulfilled, (state, action) => {
        state.reading = action.payload;
      })
      .addCase(stopReading.fulfilled, (state, action) => {
        state.reading = action.payload;
      })
      .addCase(deleteStat.fulfilled, (state, action) => {
        state.reading = action.payload;
      });
  },
});

export const booksReducer = booksSlice.reducer;
