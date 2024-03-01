import { React } from "react";
import { UserAuth } from "../../../Context/AuthContext";

const SignOutButton = () => {
  const { generalSignOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await generalSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={handleSignOut}>Sign out</button>;
};

export default SignOutButton;
