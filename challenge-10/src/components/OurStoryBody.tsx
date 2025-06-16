import { useRef } from "react";
import { useFadeIn } from "../hooks/useFadeInAnimation";

const OurStoryBody = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const para1Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const bottomText1Ref = useRef<HTMLParagraphElement>(null);
  const bottomText2Ref = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const { className: imageClass } = useFadeIn(imageRef);
  const { className: titleClass } = useFadeIn(titleRef);
  const { className: para1Class } = useFadeIn(para1Ref);
  const { className: para2Class } = useFadeIn(para2Ref);
  const { className: img2Class } = useFadeIn(img2Ref);
  const { className: img3Class } = useFadeIn(img3Ref);
  const { className: bottomText1Class } = useFadeIn(bottomText1Ref);
  const { className: bottomText2Class } = useFadeIn(bottomText2Ref);
  const { className: buttonClass } = useFadeIn(buttonRef);

  return (
    <>
      {/* First Section */}
      <div className="space-y-12 md:space-y-20 px-4 mt-12">
        <div
          ref={imageRef}
          className={`w-full py-10 md:py-20 min-h-[400px] md:min-h-[700px] flex items-center justify-center transition-opacity duration-1000 ${imageClass}`}
        >
          <img
            src="/OurStories/img1.avif"
            alt="Our Story"
            className="w-4/5 max-w-[500px] h-auto rounded-xl transform rotate-3 shadow-lg"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="md:space-y-20 px-4">
        <div>
          <h1
            ref={titleRef}
            className={`text-2xl sm:text-3xl md:text-4xl text-center mb-10 md:mb-20 transition-opacity duration-1000 ${titleClass}`}
          >
            WHERE THE WILD THINGS WED
          </h1>

          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14">
            <p
              ref={para1Ref}
              className={`text-base sm:text-lg md:text-2xl font-playfair transition-opacity duration-1000 ${para1Class}`}
            >
              We met at an art walk in Seattle, literally bumping into each
              other. We started hiking together, a lot. We both love the PNW,
              the mountains, the coast, everything. We'd be out on trails, just
              hanging out, talking around a fire. It clicked. We were on the
              same wavelength. One time, we were hiking and I complained about
              my boots and Jenny just stopped and started tying my laces for me.
              That's when I knew. It wasn't some grand gesture. It was
              just...us.
            </p>

            <p
              ref={para2Ref}
              className={`text-base sm:text-lg md:text-2xl font-playfair transition-opacity duration-1000 ${para2Class}`}
            >
              We've built a life together. It's chill, it's real. We love
              low-key adventures, but also appreciate good wine with friends.
              From those first hikes to figuring out life together under
              countless starry skies, we've always found our best moments in the
              wild.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center mt-16 relative z-10">
          <div className="relative w-[80vw] max-w-[240px] sm:max-w-[280px] md:max-w-[320px] aspect-[3/4]">
            {/* Back Image */}
            <div
              ref={img2Ref}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${img2Class}`}
            >
              <img
                src="/OurStories/img2.avif"
                alt="Back photo"
                className="w-full h-full object-cover transform -rotate-[6deg] translate-x-[-25%]"
              />
            </div>

            {/* Front Image */}
            <div
              ref={img3Ref}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${img3Class}`}
            >
              <img
                src="/OurStories/img3.avif"
                alt="Front photo"
                className="w-full h-full object-cover transform rotate-[6deg] translate-x-[25%] translate-y-[60%] shadow-lg rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="mt-[300px] sm:mt-[350px] max-w-4xl mx-auto space-y-6 relative z-0 mb-20">
          <p
            ref={bottomText1Ref}
            className={`text-base sm:text-lg md:text-2xl font-playfair transition-opacity duration-1000 ${bottomText1Class}`}
          >
            It feels right to celebrate surrounded by the people who get us.
            We're stoked to start this next chapter with you.
          </p>
          <p
            ref={bottomText2Ref}
            className={`text-base sm:text-lg md:text-2xl font-playfair transition-opacity duration-1000 ${bottomText2Class}`}
          >
            Onward and upward to the next adventure!
          </p>
        </div>

        <div
          ref={buttonRef}
          className={`flex justify-center transition-opacity duration-1000 ${buttonClass} mb-12`}
        >
          <button className="bg-[rgb(125,118,98)] px-6 py-3 rounded-full w-full max-w-[600px] text-white text-lg sm:text-xl md:text-2xl hover:bg-[rgb(73,70,62)]">
            RSVP
          </button>
        </div>
      </div>
    </>
  );
};

export default OurStoryBody;
