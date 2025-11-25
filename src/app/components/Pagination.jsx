"use client";
import Link from "next/link";

function Pagination({ currentPage, totalPages }) {
  return (
    <>
      <div className="flex justify-center gap-5 mt-10">
        {currentPage > 1 && (
          <Link
            href={`/movies?page=${currentPage - 1}`}
            className="px-4 py-2 rounded bg-gray-200/10 hover:bg-gray-300/20 text-white"
          >
            ← Previous
          </Link>
        )}

        <span className="px-4 py-2 bg-gray-200/10 hover:bg-gray-300/20 border rounded">
          Page {currentPage}
        </span>

        {currentPage < totalPages && (
          <Link
            href={`/movies?page=${currentPage + 1}`}
            className="px-4 py-2 rounded bg-gray-200/10 hover:bg-gray-300/20"
          >
            Next →
          </Link>
        )}
      </div>
    </>
  );
}

export default Pagination;
