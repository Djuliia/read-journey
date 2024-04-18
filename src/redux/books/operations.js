import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

// export const getRecommended = createAsyncThunk(
//   'books/recommend',
//   async ({ page = 1, limit = 10 }, thunkAPI) => {
//     try {
//       const { data } = await axios.get(
//         `/books/recommend?page=${page}&limit=${limit}`
//       );
//       console.log(data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getRecommended = createAsyncThunk(
  'books/recommend',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/books/recommend');
      console.log(data);
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
  'books/deleteFromLibrary',
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
