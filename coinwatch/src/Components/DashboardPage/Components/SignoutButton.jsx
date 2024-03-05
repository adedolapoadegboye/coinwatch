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

  return (
    <button
      className="hover:text-white hover:bg-black rounded-2xl border-gray-300 inter-heading text-sm xl:text-md font-light text-black capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-3"
      onClick={handleSignOut}
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
