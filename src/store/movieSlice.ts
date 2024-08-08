import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ query, year, type, page }: { query: string, year?: string, type?: string, page: number }) => {
  let url = `${API_URL}&s=${query}&page=${page}`;
  if (year) {
    url += `&y=${year}`;
  }
  if (type) {
    url += `&type=${type}`;
  }
  const response = await axios.get(url);
  return response.data.Search;
});

export const fetchMovieById = createAsyncThunk('movies/fetchMovieById', async (id: string) => {
  const response = await axios.get(`${API_URL}&i=${id}`);
  return response.data;
});

interface MovieState {
  movies: any[];
  selectedMovie: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  selectedMovie: null,
  status: 'idle',
  error: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieById.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default movieSlice.reducer;
