import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

const LandingSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const emailOnChange = (email) => {
    if (isValidEmail(email)) {
      console.log("Valid email address");
      setEmail(email);
    } else {
      console.log("Invalid email address");
    }
  };

  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="noto-sans-1 flex flex-col w-full h-full items-left justify-center gap-2">
      <label className="noto-sans-1 font-bold">Email Address</label>
      <input
        type="text"
        value={email}
        onChange={(e) => emailOnChange(e.target.value)}
        placeholder="abc@dummy.com"
        className="w-full border-2 py-2 px-2 rounded-lg"
      />
      <label className="noto-sans-1 font-bold">Password</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="w-full border-2 py-2 px-2 rounded-lg"
      />
      <button
        type="submit"
        className="border w-full py-2 px-2 rounded-lg bg-black text-white"
      >
        Sign in
      </button>{" "}
      <button
        type="submit"
        className="border w-full py-2 px-2 rounded-lg bg-black text-white"
        onClick={handleGoogleSignIn}
      >
        Continue with Google
      </button>{" "}
      <button className="border w-full py-2 px-2 rounded-lg bg-black text-white">
        <Link to="/reset">Forgot Password</Link>
      </button>
    </div>
  );
};

export default LandingSignIn;
