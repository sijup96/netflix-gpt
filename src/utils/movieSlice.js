import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowTrendingMovies: null,
    popularMovies: null,
    upcomingMovies:null,
    trailerVideo: null,
  },
  reducers: {
    addNowTrendingMovies: (state, action) => {
      state.nowTrendingMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addNowTrendingMovies,
  addUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;