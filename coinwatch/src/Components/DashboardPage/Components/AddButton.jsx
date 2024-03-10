import React from "react";
import { IoAddCircle } from "react-icons/io5";

const AddButton = (props) => {
  const { setAdd, add } = props;

  const handleClick = () => {
    setAdd(!add);
  };
  return (
    <button onClick={handleClick} className="hover:scale-125">
      <IoAddCircle size={60} color="black" />
    </button>
  );
};

export default AddButton;
