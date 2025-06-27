"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StarIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function Review() {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      comment:
        "\"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.\"",
    },
    {
      name: "Alex K.",
      rating: 5,
      comment:
        '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."',
    },
    {
      name: "James L.",
      rating: 5,
      comment:
        "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The quality of their clothes is exceptional.\"",
    },
    {
      name: "Sarah M.",
      rating: 5,
      comment:
        "\"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.\"",
    },
    {
      name: "Alex K.",
      rating: 5,
      comment:
        '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."',
    },
    {
      name: "James L.",
      rating: 5,
      comment:
        "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The quality of their clothes is exceptional.\"",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesPerRow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px", // Tăng padding để phù hợp với margin
    focusOnSelect: true,
    className: "review-slider",
    cssEase: "ease-in-out",
    arrows: false,
    variableWidth: false,
    edgeFriction: 0.2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-3 md:mt-10 overflow-hidden screen-max-width">
        <div className="text-center m-10 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-0">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="bg-white p-2 rounded-full hover:scale-110 transition-all duration-300 shadow-md"
              aria-label="Previous review"
            >
              <ArrowLeftIcon className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-white p-2 rounded-full hover:scale-110 transition-all duration-300 shadow-md"
              aria-label="Next review"
            >
              <ArrowRightIcon className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
      {/* Review Slider */}
      <div className="relative w-full">
        <Slider ref={sliderRef} {...settings} className="relative z-0">
          {reviews.map((review, index) => (
            <div key={index} className="outline-none mb-4 space-y-2">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-auto transform hover:scale-[1.02] mx-auto max-w-[300px] w-full">
                <div className="flex">{renderStars(review.rating)}</div>
                <div className="flex items-center mt-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold mr-3 flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{review.name}</p>
                  </div>
                  <CheckCircleIcon className="w-5 h-5 text-green-500 ml-2 flex-shrink-0" />
                </div>
                <div className="mt-1 flex-1">
                  <p className="text-gray-600 italic line-clamp-4 break-words">
                    {review.comment.length > 200
                      ? `${review.comment.substring(0, 200)}...`
                      : review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
