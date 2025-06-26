import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { reviews } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard = ({ review, index, pageIndex }) => {
  return (
    <div className="bg-jetLight p-8 rounded-3xl w-full max-w-[400px] mx-auto card-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Avatar and Name Section */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-timberWolf"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${review.name}&background=random&color=fff&size=64`;
            }}
          />
          {/* Verified badge */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-timberWolf font-bold text-[18px] font-beckman">
            {review.name}
          </h3>
          <p className="text-taupe text-[14px] font-poppins leading-tight">
            {review.position}
          </p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="mb-4 flex items-center gap-2">
        <StarRating rating={review.rating} />
        <span className="text-silver text-[14px] font-poppins">
          {review.rating}/5
        </span>
      </div>

      {/* Testimonial */}
      <div className="relative">
        <svg
          className="absolute top-0 left-0 w-8 h-8 text-battleGray opacity-30"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
        </svg>
        <p className="text-silver text-[14px] leading-[22px] font-poppins pl-8 italic">
          "{review.testimonial}"
        </p>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const getCurrentPageReviews = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageReviews = reviews.slice(startIndex, endIndex);

    return pageReviews;
  };

  const nextPage = () => {
    setCurrentPage((prev) => {
      const next = (prev + 1) % totalPages;

      return next;
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      const next = (prev - 1 + totalPages) % totalPages;

      return next;
    });
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // If no reviews, show a fallback
  if (!reviews || reviews.length === 0) {
    return (
      <div className="mt-20">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What clients say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
        <div className="flex justify-center mt-8">
          <p className="text-silver text-[16px]">
            No reviews available at the moment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What clients say</p>
        <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          Here's what some of my clients have to say about working with me.
          Their feedback reflects my commitment to delivering high-quality
          solutions and exceptional client service.
        </motion.p>
      </div>

      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        {/* Navigation Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8 mb-4">
            <button
              onClick={prevPage}
              className="p-3 rounded-full bg-jetLight hover:bg-battleGray transition-colors duration-300"
              aria-label="Previous page"
            >
              <svg
                className="w-5 h-5 text-timberWolf"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Page dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentPage === index
                      ? "bg-timberWolf"
                      : "bg-battleGray hover:bg-silver"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="p-3 rounded-full bg-jetLight hover:bg-battleGray transition-colors duration-300"
              aria-label="Next page"
            >
              <svg
                className="w-5 h-5 text-timberWolf"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="mt-[50px] min-h-[400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentPageReviews().map((review, index) => (
            <ReviewCard
              key={`${review.id}-${currentPage}`}
              review={review}
              index={index}
              pageIndex={currentPage}
            />
          ))}
        </div>

        {/* Page indicator */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <span className="text-silver text-[14px] font-poppins">
              Page {currentPage + 1} of {totalPages} | Showing{" "}
              {getCurrentPageReviews().length} of {reviews.length} reviews
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Reviews, "reviews");
