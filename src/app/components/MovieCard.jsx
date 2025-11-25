import Image from "next/image";
import Link from "next/link";
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
export function MovieCard({ movie }) {
  const rating = Math.round(movie.vote_average * 10);
  const getRatingColor = (rating) => {
    if (rating >= 70) return "bg-green-500";
    if (rating >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="rounded-xl bg-linear-to-r from-cyan-800/10 to-cyan-700/10 overflow-hidden shadow-lg group cursor-pointer">
        <div className="relative overflow-hidden">
          <Image
            width={400}
            height={600}
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            loading="eager"
            className="w-full h-fit  object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <div
              className={`${getRatingColor(
                rating
              )} text-white px-2 py-1 rounded-full text-sm font-bold flex items-center gap-1`}
            >
              <span>★</span>
              <span>{rating}%</span>
            </div>
          </div>
          <div className="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <div className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                View Details
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {movie.title}
          </h3>

          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
            {movie.release_date ? formatDate(movie.release_date) : "TBA"}
          </div>

          <div className="flex items-center justify-between text-sm mb-3">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              {movie.vote_count} votes
            </div>
          </div>

          {movie.overview && (
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-3">
              {movie.overview}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
