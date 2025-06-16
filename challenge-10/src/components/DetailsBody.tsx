import { Link } from "react-router-dom";
import { useRef } from "react";
import { useFadeIn } from "../hooks/useFadeInAnimation";

const DetailsBody = () => {
  const refs = Array.from({ length: 8 }, () => useRef<HTMLDivElement>(null));
  const fadeClasses = refs.map(
    (ref) => useFadeIn(ref, { threshold: 0.1 }).className
  );

  return (
    <div className="relative">
      {/* Hero Section */}
      <header className="relative h-[520px] sm:h-[620px] md:h-[720px]">
        <div className="bg-cover absolute inset-0 bg-center bg-[url('/Details/img1.avif')]">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div
          ref={refs[0]}
          className={`relative flex items-center h-full justify-center ${fadeClasses[0]}`}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-playfair text-white text-center p-6 rounded-lg">
            THE DETAILS
          </h1>
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
            <h1 className="text-lg sm:text-xl md:text-3xl font-playfair text-white mb-10 md:mb-20 leading-relaxed">
              We invite you to our wedding at Golden Elm Manor, an enchanting
              place where towering elms meet candlelit pathways. And where our
              next adventure begins.
            </h1>
            <div className="flex justify-center items-center">
              <button className="bg-[rgb(176,169,150)] hover:bg-white transition-colors duration-300 px-6 py-3 rounded-full w-full md:w-[700px] text-black text-xl sm:text-2xl flex items-center justify-center">
                RSVP
              </button>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div
          ref={refs[2]}
          className={`mx-auto max-w-[1020px] ${fadeClasses[2]}`}
        >
          <img
            src="/Details/img2.webp"
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
              <p>Saturday, September 20, 2025</p>
            </div>
            <div>
              <p>Venue:</p>
              <p>The Golden Elm Manor, St. Augustine, NY</p>
            </div>
            <div>
              <p>Ceremony:</p>
              <p>4:30 PM</p>
            </div>
            <div>
              <p>Reception:</p>
              <p>6:00 PM - Midnight</p>
            </div>
          </div>

          {/* Right */}
          <div className="bg-[rgb(238,238,235)] w-full rounded-2xl p-8 md:p-14 flex flex-col items-center justify-center text-center gap-6">
            <div>
              <p>Musical Guest:</p>
              <p>
                The Starlight Quartet, followed by a surprise jazz ensemble.
              </p>
            </div>
            <div>
              <p>Dinner:</p>
              <p>
                A seasonal farm-to-table menu featuring dishes inspired by our
                favorite travels.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div ref={refs[4]} className={`relative mb-20 ${fadeClasses[4]}`}>
          <img
            src="/Details/img3.avif"
            alt="img3"
            className="w-full h-[300px] sm:h-[400px] md:h-[555px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-playfair text-white">
              TRAVEL & STAY
            </h1>
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
              src="/Details/img4.avif"
              alt="img4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="bg-[rgb(238,238,235)] w-full md:w-1/2 h-auto md:h-[511px] rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none p-8 md:p-14 flex items-center justify-center text-center">
            <p>
              Golden Elm Manor is a 90-minute train ride from Grand Central
              Station, with direct routes to St. Augustine. Complimentary
              shuttles will be available from the station to the T.
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
              src="/Details/img5.avif"
              alt="img5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="bg-[rgb(238,238,235)] w-full md:w-1/2 h-auto md:h-[511px] rounded-b-2xl md:rounded-l-2xl md:rounded-br-none p-8 md:p-14 flex items-center justify-center text-center">
            <p>
              We've reserved charming accommodations at The Wildflower Inn –
              Cozy & quaint, right in town. The Fox & Finch Manor – A historic
              stay just minutes from the venue.
            </p>
          </div>
        </div>

        {/* Section 8 - Registry */}
        <div className="relative w-full max-w-[1280px] mt-12 mx-auto">
          {/* Image Wrapper */}
          <div className="relative w-full">
            <img
              src="/Home/body-2-home.avif"
              alt="body-2-home"
              className="w-full h-[500px] md:h-[747px] object-cover"
            />

            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6 md:px-8">
              <div
                ref={refs[7]}
                className={`text-white max-w-[600px] ${fadeClasses[7]}`}
              >
                <h1 className="text-3xl md:text-5xl font-playfair mb-4 md:mb-6">
                  REGISTRY
                </h1>
                <p className="text-base sm:text-lg md:text-2xl font-playfair mb-6 md:mb-8">
                  Your presence is the most cherished gift. Should you wish to
                  contribute, we've created a honeymoon registry to help us
                  embark on a memorable adventure to the Amalfi Coast.
                </p>
                <Link
                  to="/registry"
                  className="inline-block bg-[rgb(125,118,98)] hover:bg-[rgb(73,70,62)] text-white text-lg md:text-xl px-6 md:px-8 py-3 rounded-full transition-colors duration-300"
                >
                  GO TO REGISTRY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailsBody;
