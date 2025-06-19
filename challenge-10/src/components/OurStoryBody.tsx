import { useRef } from "react";
import { useFadeIn } from "../hooks/useFadeInAnimation";
import type { OurStoryData } from "../storage/types";

export default function OurStoryBody({
  topImage,
  title,
  story1,
  story2,
  imageSection,
  quote,
}: OurStoryData) {
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
            src={topImage}
            alt="Our Story"
            className="w-4/5 max-w-[500px] h-auto rounded-xl transform rotate-3 shadow-lg"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="md:space-y-20 px-4">
        <div>
          <p
            ref={titleRef}
            className={`text-2xl sm:text-3xl md:text-4xl text-center mb-10 md:mb-20 transition-opacity duration-1000 ${titleClass}`}
          >
            {title}
          </p>

          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14">
            <p
              ref={para1Ref}
              className={`text-base sm:text-lg md:text-2xl font-playfair transition-opacity duration-1000 ${para1Class}`}
            >
              {story1}
            </p>

            <p
              ref={para2Ref}
              className={`text-base sm:text-lg md:text-2xl font-playfair transition-opacity duration-1000 ${para2Class}`}
            >
              {story2}
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
                src={imageSection.backImage}
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
                src={imageSection.frontImage}
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
            {quote.text1}
          </p>
          <p
            ref={bottomText2Ref}
            className={`text-base sm:text-lg md:text-2xl font-playfair transition-opacity duration-1000 ${bottomText2Class}`}
          >
            {quote.text2}
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
