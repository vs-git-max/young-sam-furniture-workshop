import { StarHalf, StarIcon, StarOff } from "lucide-react";
import React from "react";

const StarRating = ({ rating }) => {
  const fullStar = Math.floor(rating);
  const halfStar = rating - fullStar >= 0.5;
  const emptyStar = 5 - fullStar - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStar)].map((_, i) => (
        <StarIcon key={`full ${i}`} className="text-orange-600 size-5" />
      ))}
      {halfStar && <StarHalf className="text-orange-600 size-5" />}
      {[...Array(emptyStar)].map((_, i) => (
        <StarOff key={`empty ${i}`} className="text-orange-600 size-5" />
      ))}
    </div>
  );
};

export default StarRating;
