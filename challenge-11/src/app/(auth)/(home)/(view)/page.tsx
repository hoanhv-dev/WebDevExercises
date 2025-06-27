import React from "react";
import Hero from "../components/Hero";
import Body from "../components/Body";
import Review from "../components/Review";

export default function HomePage() {
  return (
    <>
      <div className="w-full">
        <Hero />
        <div className="screen-max-width">
          <div className="mx-16">
            <Body />
          </div>
        </div>
        <Review />
      </div>
    </>
  );
}
