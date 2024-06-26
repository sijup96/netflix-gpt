import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowTrendingMovies } from "../utils/movieSlice";

const useNowTrendingMovies = () => {
  const dispatch = useDispatch();
  
  const nowTrendingMovies = useSelector(
    (store) => store.movies.nowTrendingMovies
  );
  const getNowTrendingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=2",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowTrendingMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch trending movies:", error);
    }
  };

  useEffect(() => {
    !nowTrendingMovies && getNowTrendingMovies()
  }, []);
};

export default useNowTrendingMovies;
