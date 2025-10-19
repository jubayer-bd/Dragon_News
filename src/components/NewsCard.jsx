import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaRegEye, FaStar, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  const [isExpanded, setIsExpanded] = useState(false);

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center bg-base-200 justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="text-gray-500 flex flex-row items-center gap-3">
          <CiBookmark className="hover:cursor-pointer" size={16} />
          <FaShareAlt className="hover:cursor-pointer" size={16} />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg px-4 pt-4">{title}</h3>

      {/* Image */}
      <figure className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full h-52 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pb-4 text-sm text-gray-600">
        {isExpanded ? (
          <>
            {details}{" "}
            <span
              className="text-neutral font-medium cursor-pointer"
              onClick={() => setIsExpanded(false)}
            >
              Show Less
            </span>
          </>
        ) : (
          <>
            {details.slice(0, 200)}...
            <span
              className="text-neutral font-medium cursor-pointer"
              onClick={() => setIsExpanded(true)}
            >
              Read More
            </span>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4 text-sm border-t pt-3">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={14}
              className={
                i < rating.number ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-gray-600 font-medium">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye size={15} />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
