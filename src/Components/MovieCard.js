import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie) return null;
  return (
    <div className="w-44 md:w-56 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + movie.poster_path} />
    </div>
  );
};
export default MovieCard;