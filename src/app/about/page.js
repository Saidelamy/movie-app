import Link from "next/link";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About CineVerse
            </h1>
            <p className="text-xl text-gray-300">
              Your ultimate destination for movie discovery and information
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                CineVerse is dedicated to providing movie enthusiasts with a
                comprehensive platform to discover, explore, and learn about
                films from around the world. We believe in the power of cinema
                to inspire, entertain, and connect people.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our platform leverages the extensive database of The Movie
                Database (TMDB) to bring you accurate, up-to-date information
                about your favorite movies, actors, and filmmakers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                What We Offer
              </h2>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Extensive movie database with detailed information
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Cast and crew information with biographies
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  User ratings and reviews
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Similar movie recommendations
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Advanced search and filtering options
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Vast Collection</h3>
              <p className="text-gray-400">
                Access thousands of movies from classic films to latest releases
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast & Reliable</h3>
              <p className="text-gray-400">
                Quick access to movie information with reliable data sources
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p className="text-gray-400">
                Powered by community contributions and reviews
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
