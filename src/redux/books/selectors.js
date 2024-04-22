import { createSelector } from '@reduxjs/toolkit';
export const selectIsLoading = state => state.books.isLoading;
export const selectBooks = state => state.books.books;
export const selectOwnBooks = state => state.books.own;
export const selectReadingBooks = state => state.books.reading;

export const selectBookByTitle = createSelector(
  selectOwnBooks,
  (state, bookTitle) => bookTitle,
  (books, bookTitle) => {
    return books.find(book => book.title === bookTitle);
  }
);
