const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col gap-4 hover:border-purple-800 transition-colors duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={review.freelancer.avatar}
            alt={review.freelancer.name}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-purple-900"
          />
          <div>
            <p className="text-white font-semibold text-sm leading-tight">
              {review.freelancer.name}
            </p>
            <p className="text-gray-400 text-xs">{review.freelancer.title}</p>
            <p className="text-gray-600 text-xs">{review.freelancer.location}</p>
          </div>
        </div>
        <span className="text-gray-600 text-xs whitespace-nowrap">{review.date}</span>
      </div>

      {/* Stars & Job Tag */}
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-lg leading-none ${
                review.rating >= star ? "text-purple-400" : "text-gray-600"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <span className="text-xs text-purple-400 bg-purple-900/30 px-2 py-0.5 rounded-full truncate max-w-[180px]">
          {review.jobTitle}
        </span>
      </div>

      {/* Comment */}
      <p className="text-gray-300 text-sm leading-relaxed">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;