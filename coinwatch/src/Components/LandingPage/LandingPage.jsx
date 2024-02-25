import React from "react";
import LandingFooter from "./LandingFooter";
import LandingHeader from "./LandingHeader";
import LandingSignIn from "./LandingSignIn";
import LandingSignUp from "./LandingSignUp";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col md:h-[calc(100vh-7vh)] h-[calc(100vh-10vh)] w-screen gap-6 items-center justify-center">
        <div>
          <LandingHeader />
        </div>
        <div>
          <LandingSignIn />
          <LandingSignUp />
        </div>
      </div>
      <div className="h-fit w-full">
        <LandingFooter />
      </div>
    </div>
  );
};

export default LandingPage;
