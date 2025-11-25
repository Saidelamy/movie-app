import { MovieCard } from "../components/MovieCard";
import Pagination from "../components/Pagination";
import SearchMovie from "../components/SearchMovie";

async function getMovies(page) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MAIN_API_URL}/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MAIN_API_KEY}&page=${page}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Page({ searchParams }) {
  // const promise = await searchParams;
  const currentPage = Number(searchParams.page) || 1;
  const moviesData = await getMovies(currentPage);
  console.log(moviesData);

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <SearchMovie />

      <h2 className="text-2xl font-bold mt-6 mb-4">Popular Movies</h2>

      <div className="grid grid-cols-3 gap-6">
        {moviesData.results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={moviesData.total_pages}
      />
    </div>
  );
}
