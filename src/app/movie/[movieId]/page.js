"use client";
import Loader from "@/app/components/Loader";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MAIN_API_URL}/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_MAIN_API_KEY}`,
          {
            cache: "force-cache",
          }
        );
        const data = await res.json();
        setMovie(data);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const ratingColor = (rating) => {
    if (rating >= 7) return "text-green-500";
    if (rating >= 5) return "text-yellow-500";
    return "text-red-500";
  };

  const rating = movie?.vote_average;

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  if (!movie) return <p>No movie found</p>;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4 py-8">
        {movie.backdrop_path && (
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              fill
              alt={movie.title}
              className="object-cover"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] to-transparent" />
          </div>
        )}

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="rounded-xl overflow-hidden shadow-2xl mb-6">
              <Image
                width={400}
                height={600}
                alt={movie.title}
                className="w-full h-auto"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/placeholder-movie.jpg"
                }
              />
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className="font-semibold">{movie.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Release Date</span>
                  <span className="font-semibold">
                    {new Date(movie.release_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Budget</span>
                  <span className="font-semibold">
                    {movie.budget > 0
                      ? formatCurrency(movie.budget)
                      : "Not disclosed"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Revenue</span>
                  <span className="font-semibold">
                    {movie.revenue > 0
                      ? formatCurrency(movie.revenue)
                      : "Not disclosed"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Adult Content</span>
                  <span
                    className={`font-semibold ${
                      movie.adult ? "text-red-400" : "text-green-400"
                    }`}
                  >
                    {movie.adult ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {movie.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className={`text-2xl font-bold ${ratingColor(rating)}`}>
                  ★ {rating.toFixed(1)}/10
                </div>
                <span className="text-gray-400">
                  ({movie.vote_count} votes)
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">
                  Popularity: {Math.round(movie.popularity)}
                </span>
              </div>

              {movie.tagline && (
                <p className="text-xl text-gray-300 italic mb-4">
                  {movie.tagline}
                </p>
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {movie.overview}
              </p>
            </div>

            {movie.genres && movie.genres.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {movie.belongs_to_collection && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Part of Collection</h3>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="font-semibold text-lg">
                    {movie.belongs_to_collection.name}
                  </p>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {movie.production_companies &&
                movie.production_companies.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      Production Companies
                    </h3>
                    <div className="space-y-2">
                      {movie.production_companies.map((company) => (
                        <div
                          key={company.id}
                          className="flex items-center gap-3"
                        >
                          {company.logo_path && (
                            <Image
                              width={30}
                              height={30}
                              alt={company.name}
                              src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
                              className="rounded"
                            />
                          )}
                          <span>{company.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {movie.production_countries &&
                movie.production_countries.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      Production Countries
                    </h3>
                    <div className="space-y-2">
                      {movie.production_countries.map((country) => (
                        <div
                          key={country.iso_3166_1}
                          className="flex items-center gap-2"
                        >
                          <span className="text-lg">🇺🇸</span>
                          <span>{country.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {movie.spoken_languages && movie.spoken_languages.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-3">Spoken Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.spoken_languages.map((language) => (
                      <span
                        key={language.iso_639_1}
                        className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {language.english_name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold mb-3">External Links</h3>
                <div className="space-y-2">
                  {movie.homepage && (
                    <a
                      href={movie.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Official Website
                    </a>
                  )}
                  {movie.imdb_id && (
                    <a
                      href={`https://www.imdb.com/title/${movie.imdb_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.68 2.5h-2.56v19h2.56V2.5zm-6.25 0H9.87v19h2.56V2.5zm-6.25 0H3.62v19h2.56V2.5z" />
                      </svg>
                      IMDb Page
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">
                  {movie.original_language.toUpperCase()}
                </div>
                <div className="text-gray-400">Original Language</div>
              </div>

              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-green-400">
                  {movie.origin_country?.join(", ") || "N/A"}
                </div>
                <div className="text-gray-400">Origin Country</div>
              </div>

              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">
                  {movie.video ? "Yes" : "No"}
                </div>
                <div className="text-gray-400">Has Video</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
