import React, { useState } from "react";
import SignOutButton from "../Components/SignoutButton";
import { UserAuth } from "../../../Context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../Components/ThemeButton";
import Navbar from "../Components/Navbar";

import AddButton from "../Components/AddButton";
import AnalysisOverview from "../Components/AnalysisOverview";
import SummaryOverview from "../Components/SummaryOverview";
import TimeRange from "../Components/TimeRange";

const Homepage = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
      // console.log("The user object is null");
    } else if (Object.keys(user).length === 0 && user.constructor === Object) {
      // console.log("The user object is empty");
    } else {
      // console.log("The user object is populated");
    }
  }, [user, navigate]);

  return (
    <div className="flex noto-sans-1 w-screen lg:h-screen lg:fixed px-2 py-4 lg:py-2 ">
      <div className="flex-col hidden md:flex relative border-r-2 border-gray-200">
        <Navbar />
      </div>{" "}
      <div className="flex flex-col gap-4 px-2 py-2 w-full h-full">
        <div className="flex w-full h-fit justify-between border-b-0 border-gray-200">
          <h1 className="inter-heading text-3xl lg:text-3xl font-old capitalize text-black leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
            Welcome, {user?.displayName}
          </h1>
          <div className="flex justify-center items-center gap-4">
            <div className="hidden md:flex">
              {" "}
              <TimeRange />
            </div>
            <div>
              {" "}
              <SignOutButton />
            </div>
            <div className="hidden md:flex">
              <ThemeButton />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-fit h-fit justify-start lg:hidden">
          <TimeRange />
        </div>
        <div className="flex flex-col w-full h-fit justify-start">
          <SummaryOverview />
        </div>
        <div className="flex flex-col w-full h-full justify-start">
          <AnalysisOverview />
        </div>
        <div className="flex justify-end pb-2 sticky bottom-0 left-0 z-50">
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
