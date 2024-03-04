import React from "react";
import SignOutButton from "../Components/SignoutButton";
import { UserAuth } from "../../../Context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ThemeButton from "../Components/ThemeButton";

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
    <div className="flex noto-sans-1 w-screen fixed">
      <div className="flex-col hidden md:flex relative border-r-2">
        <Navbar />
      </div>
      <div className="flex border w-full justify-between">
        <h1>Welcome, {user?.displayName}</h1>
        <div>
          <SignOutButton />
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
