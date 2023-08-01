import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex items-center">
      {[...Array(rating)].map((x, i) => (
        <div key={i}>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ...SVG path here */}
          </svg>
        </div>
      ))}
      {[...Array(5 - rating)].map((x, i) => (
        <div key={i}>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-300 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ...SVG path here */}
          </svg>
        </div>
      ))}
      <p className="ml-2">(15)</p>
    </div>
  );
};

export default StarRating;
