import React from "react";
import SignOutButton from "../Components/SignoutButton";
import { UserAuth } from "../../../Context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../Components/ThemeButton";
import Navbar from "../Components/Navbar";
import { TbBrandCashapp } from "react-icons/tb";
import { RiBankLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiDonateHeart } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";

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
    <div className="flex noto-sans-1 w-screen fixed px-2 py-2">
      <div className="flex-col hidden md:flex relative border-r-2 border-gray-200">
        <Navbar />
      </div>{" "}
      <div className="flex flex-col gap-4 px-2 py-2 w-full h-full">
        <div className="flex w-full h-fit justify-between border-b-2 border-gray-200">
          <h1 className="inter-heading text-2xl font-extrabold capitalize text-black leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
            Welcome, {user?.displayName}
          </h1>
          <div className="flex justify-center items-center gap-4">
            <SignOutButton />
            <div className="hidden md:flex">
              <ThemeButton />
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <h2 className="inter-heading-2 text-lg capitalize text-black leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
            Summary
          </h2>
        </div>
        <div className="grid gap-2 lg:grid-cols-6 lg:grid-flow-col lg:gap-4 px-2">
          <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
            <div className="flex flex-col justify-between">
              <h3 className="lg:text-sm">TOTAL INCOME</h3>
              <h3 className="lg:text-sm inter-heading">CA$ 0</h3>
            </div>
            <div className="px-2">
              <TbBrandCashapp size={20} />
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
            <div className="flex flex-col justify-between">
              <h3 className="lg:text-sm">AVAILABLE BALANCE</h3>
              <h3 className="lg:text-sm inter-heading">CA$ 0</h3>
            </div>
            <div className="px-2">
              <RiBankLine size={20} />
            </div>
          </div>{" "}
          <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
            <div className="flex flex-col justify-between">
              <h3 className="lg:text-sm">TOTAL EXPENSES</h3>
              <h3 className="lg:text-sm inter-heading">CA$ 0</h3>
            </div>
            <div className="px-2">
              <BsCart4 size={20} />
            </div>
          </div>{" "}
          <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
            <div className="flex flex-col justify-between">
              <h3 className="lg:text-sm">TOTAL INVESTMENTS</h3>
              <h3 className="lg:text-sm inter-heading">CA$ 0</h3>
            </div>
            <div className="px-2">
              <FaMoneyBillTrendUp size={20} />
            </div>
          </div>{" "}
          <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
            <div className="flex flex-col justify-between">
              <h3 className="lg:text-sm">TOTAL DONATIONS</h3>
              <h3 className="lg:text-sm inter-heading">CA$ 0</h3>
            </div>
            <div className="px-2">
              <BiDonateHeart size={20} />
            </div>
          </div>{" "}
          <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
            <div className="flex flex-col justify-between">
              <h3 className="lg:text-sm">TOTAL SUBSCRIPTIONS</h3>
              <h3 className="lg:text-sm inter-heading">CA$ 0</h3>
            </div>
            <div className="px-2">
              <MdSubscriptions size={20} />
            </div>
          </div>{" "}
        </div>
        <div className="flex justify-start">
          <h2 className="inter-heading-2 text-lg capitalize text-black leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-4">
            Analysis
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
