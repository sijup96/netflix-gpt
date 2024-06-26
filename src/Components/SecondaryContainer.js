import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="w-full bg-black">
      <div className="w-full mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        {movies.nowPlayingMovies && (
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        )}
        {movies.nowTrendingMovies && (
          <MovieList title={"Trending"} movies={movies.nowTrendingMovies} />
        )}
        {movies.popularMovies && (
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        )}
        {movies.upcomingMovies && (
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        )}
        )
      </div>
    </div>
  );
};
export default SecondaryContainer;
