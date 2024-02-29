import React, { useState, useEffect } from "react";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const LandingSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading, navigate]);

  return (
    <div className="noto-sans-1 flex flex-col w-full h-full items-left justify-center gap-2">
      <label className="noto-sans-1 font-bold">Email Address</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        onClick={logInWithEmailAndPassword(email, password)}
      >
        Sign in
      </button>{" "}
      <button
        type="submit"
        className="border w-full py-2 px-2 rounded-lg bg-black text-white"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>{" "}
      <div>
        <Link to="/reset">Forgot Password</Link>
      </div>
    </div>
  );
};

export default LandingSignIn;
