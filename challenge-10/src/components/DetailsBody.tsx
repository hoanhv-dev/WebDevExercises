import { Link } from "react-router-dom";
import { useRef } from "react";
import { useFadeIn } from "../hooks/useFadeInAnimation";
import type { DetailsBodyProps } from "../storage/types";

export default function DetailsBody({
  hero,
  invitation,
  galleryImage,
  eventDetails,
  travelStay,
  registry
}: DetailsBodyProps) {
  const refs = Array.from({ length: 8 }, () => useRef<HTMLDivElement>(null));
  const fadeClasses = refs.map(
    (ref) => useFadeIn(ref).className
  );

  return (
    <div className="relative">
      {/* Hero Section */}
      <header className="relative h-[520px] sm:h-[620px] md:h-[720px]">
        <div className="bg-cover absolute inset-0 bg-center" style={{ backgroundImage: `url(${hero.image})` }}>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div
          ref={refs[0]}
          className={`relative flex items-center h-full justify-center ${fadeClasses[0]}`}
        >
          <p className="text-3xl sm:text-5xl md:text-7xl font-playfair text-white text-center p-6 rounded-lg">
            {hero.title}
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto w-full max-w-[1280px] px-4 md:px-6 gap-5">
        {/* Section 2 */}
        <div
          ref={refs[1]}
          className={`mx-auto my-16 md:my-20 max-w-[1020px] bg-[rgb(125,118,98)] rounded-2xl overflow-hidden ${fadeClasses[1]}`}
        >
          <div className="p-6 md:p-16 text-center">
            <p className="text-lg sm:text-xl md:text-3xl font-playfair text-white mb-10 md:mb-20 leading-relaxed">
              {invitation.text}
            </p>
            <div className="flex justify-center items-center">
              <Link to={invitation.buttonLink} className="bg-[rgb(176,169,150)] hover:bg-white transition-colors duration-300 px-6 py-3 rounded-full w-full md:w-[700px] text-black text-xl sm:text-2xl flex items-center justify-center">
                {invitation.buttonText}
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div
          ref={refs[2]}
          className={`mx-auto max-w-[1020px] ${fadeClasses[2]}`}
        >
          <img
            src={galleryImage}
            alt="img2"
            className="w-full h-auto max-h-[555px] object-cover"
          />
        </div>

        {/* Section 4 */}
        <div
          ref={refs[3]}
          className={`mx-auto max-w-[1020px] my-20 flex flex-col md:flex-row gap-6 text-lg md:text-2xl text-gray-700 ${fadeClasses[3]}`}
        >
          {/* Left */}
          <div className="bg-[rgb(238,238,235)] w-full rounded-2xl p-8 md:p-14 flex flex-col items-center justify-center text-center gap-6">
            <div>
              <p>Date:</p>
              <p>{eventDetails.left.date}</p>
            </div>
            <div>
              <p>Venue:</p>
              <p>{eventDetails.left.venue}</p>
            </div>
            <div>
              <p>Ceremony:</p>
              <p>{eventDetails.left.ceremony}</p>
            </div>
            <div>
              <p>Reception:</p>
              <p>{eventDetails.left.reception}</p>
            </div>
          </div>

          {/* Right */}
          <div className="bg-[rgb(238,238,235)] w-full rounded-2xl p-8 md:p-14 flex flex-col items-center justify-center text-center gap-6">
            <div>
              <p>Musical Guest:</p>
              <p>{eventDetails.right.musicalGuest}</p>
            </div>
            <div>
              <p>Dinner:</p>
              <p>{eventDetails.right.dinner}</p>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div ref={refs[4]} className={`relative mb-20 ${fadeClasses[4]}`}>
          <img
            src={travelStay.image}
            alt="img3"
            className="w-full h-[300px] sm:h-[400px] md:h-[555px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-3xl md:text-5xl font-playfair text-white">
              {travelStay.sectionTitle}
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div
          ref={refs[5]}
          className={`mx-auto max-w-[1020px] my-16 md:my-20 flex flex-col md:flex-row text-lg md:text-2xl text-gray-700 ${fadeClasses[5]}`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[511px] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
            <img
              src={travelStay.info1.image}
              alt="img4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="bg-[rgb(238,238,235)] w-full md:w-1/2 h-auto md:h-[511px] rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none p-8 md:p-14 flex items-center justify-center text-center">
            <p>
              {travelStay.info1.text}
            </p>
          </div>
        </div>

        {/* Section 7 */}
        <div
          ref={refs[6]}
          className={`mx-auto max-w-[1020px] my-16 md:my-20 flex flex-col md:flex-row-reverse text-lg md:text-2xl text-gray-700 ${fadeClasses[6]}`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[511px] rounded-t-2xl md:rounded-r-2xl md:rounded-bl-none overflow-hidden">
            <img
              src={travelStay.info2.image}
              alt="img5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="bg-[rgb(238,238,235)] w-full md:w-1/2 h-auto md:h-[511px] rounded-b-2xl md:rounded-l-2xl md:rounded-br-none p-8 md:p-14 flex items-center justify-center text-center">
            <p>
              {travelStay.info2.text}
            </p>
          </div>
        </div>

        {/* Section 8 - Registry */}
        <div className="relative w-full max-w-[1280px] mt-12 mx-auto">
          {/* Image Wrapper */}
          <div className="relative w-full">
            <img
              src={registry.image}
              alt="body-2-home"
              className="w-full h-[500px] md:h-[747px] object-cover"
            />

            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6 md:px-8">
              <div
                ref={refs[7]}
                className={`text-white max-w-[600px] ${fadeClasses[7]}`}
              >
                <p className="text-3xl md:text-5xl font-playfair mb-4 md:mb-6">
                  {registry.sectionTitle}
                </p>
                <p className="text-base sm:text-lg md:text-2xl font-playfair mb-6 md:mb-8">
                  {registry.text}
                </p>
                <Link
                  to={registry.buttonLink}
                  className="inline-block bg-[rgb(125,118,98)] hover:bg-[rgb(73,70,62)] text-white text-lg md:text-xl px-6 md:px-8 py-3 rounded-full transition-colors duration-300"
                >
                  {registry.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


