import React, { useState } from "react";
import { UserAuth } from "../../Context/AuthContext";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [formError, setFormError] = useState();
  const { createUser } = UserAuth();

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

  const passwordOnChange = (entry) => {
    setPassword(entry);
  };

  const retypedPasswordOnChange = (entry) => {
    setRetypedPassword(entry);
  };

  const isPasswordMatch = () => {
    if (password === retypedPassword) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isPasswordMatch && isValidEmail) {
      try {
        console.log(email, password);
        await createUser(email, password);
      } catch (error) {
        setFormError(error.message);
        console.log(formError);
      }
    }
    return;
  };

  return (
    <div className="noto-sans-1 flex flex-col w-full h-full items-left justify-center gap-2">
      <label className="noto-sans-1 font-bold">Email Address</label>
      <input
        type="email"
        // value={email}
        onChange={(e) => emailOnChange(e.target.value)}
        placeholder="abc@dummy.com"
        className="w-full border-2 py-2 px-2 rounded-lg"
      />
      <label className="noto-sans-1 font-bold">Password</label>
      <input
        type="text"
        // value={password}
        onChange={(e) => passwordOnChange(e.target.value)}
        placeholder="password"
        className="w-full border-2 py-2 px-2 rounded-lg"
      />
      <label className="noto-sans-1 font-bold">Retype Password</label>
      <input
        type="text"
        // value={retypedPassword}
        onChange={(e) => retypedPasswordOnChange(e.target.value)}
        placeholder="retype password"
        className="w-full border-2 py-2 px-2 rounded-lg"
      />
      <button
        type="submit"
        className="border w-full py-2 px-2 rounded-lg bg-black text-white"
        onClick={handleSubmit}
      >
        Sign up for free
      </button>{" "}
    </div>
  );
};

export default SignUpForm;
