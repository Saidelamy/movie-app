"use client";

import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import Loader from "./Loader";

function SearchMovie() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const delay = setTimeout(async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_MAIN_API_URL}/3/search/movie?api_key=${process.env.NEXT_PUBLIC_MAIN_API_KEY}&query=${searchQuery}`
      );
      const data = await res.json();
      setResults(data.results);
    }, 500);
    return () => clearTimeout(delay);
  }, [searchQuery]);

  return (
    <>
      <button className="bg-linear-to-r from-cyan-800 to-cyan-500 px-6 py-3 rounded-md cursor-pointer text-white">
        Search
      </button>

      {searchOpen && (
        <div className="">
          <input
            type="search"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Search Movie"
            className="bg-white text-black border-0 w-xl rounded-md p-2"
          />

          {results.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-4">Search Results</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {results.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default SearchMovie;
