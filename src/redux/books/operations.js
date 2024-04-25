import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const getRecommended = createAsyncThunk(
  'books/recommend',
  async ({ page = 1, limit = 10 }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/books/recommend?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToLibrary = createAsyncThunk(
  'books/addToLibrary',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.post(`/books/add/${id}`);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        throw new Error('This book is already in your library.');
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const deleteFromLibrary = createAsyncThunk(
  'books/delete',
  async (bookId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/books/remove/${bookId}`);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        throw new Error('Such book already exists');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwn = createAsyncThunk('books/own', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/books/own');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addFromFilter = createAsyncThunk(
  'books/addFromFilter',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/books/add/', credentials);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        throw new Error('Such book already exists');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const startReading = createAsyncThunk(
  'books/startReading',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/books/reading/start', credentials);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        throw new Error('You have already started reading this book');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const stopReading = createAsyncThunk(
  'books/stopReading',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/books/reading/finish', credentials);
      console.log(data);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        const errorMessage = error.response.data.message;
        if (errorMessage === "You haven't started reading this book") {
          throw new Error("You haven't started reading this book");
        } else if (errorMessage === 'This book is already read') {
          throw new Error('This book is already read');
        } else if (
          errorMessage === 'The finish page cannot be less than the start page.'
        ) {
          throw new Error(
            'The finish page cannot be less than the start page.'
          );
        } else {
          throw new Error('Unknown error occurred');
        }
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const deleteStat = createAsyncThunk(
  'books/deleteReading',
  async ({ bookId, readingId }, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `/books/reading?bookId=${bookId}&readingId=${readingId}`
      );
      return data;
    } catch (error) {
      throw new Error(error.response.data.message || error.message);
    }
  }
);
