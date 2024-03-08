import React from "react";
import { IoAddCircle } from "react-icons/io5";

const AddButton = () => {
  return (
    <button className="hover:scale-125">
      <IoAddCircle size={60} color="black" />
    </button>
  );
};

export default AddButton;
