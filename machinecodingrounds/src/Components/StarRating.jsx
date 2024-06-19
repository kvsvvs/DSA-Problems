import React, { useState } from "react";

const Star = ({ filled, onClick, onMouseOver, onMouseLeave }) => {
  const starStyle = filled ? "★" : "☆";

  return (
    <span
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      style={{ cursor: "pointer", fontSize: "24px" }}
    >
      {starStyle}
    </span>
  );
};

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (newHoverRating) => {
    setHoverRating(newHoverRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      {[...Array(totalStars)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <Star
            key={ratingValue}
            filled={
              hoverRating ? ratingValue <= hoverRating : ratingValue <= rating
            }
            onClick={() => handleClick(ratingValue)}
            onMouseOver={() => handleMouseOver(ratingValue)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
