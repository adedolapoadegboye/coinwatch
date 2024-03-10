import React, { useState } from "react";
import EntryType from "../Subcomponents/EntryType";
import EntryTypeIncome from "../Subcomponents/EntryTypeIncome";
import EntryTypeExpenses from "../Subcomponents/EntryTypeExpenses";
import EntryTypeDonations from "../Subcomponents/EntryTypeDonations";
import EntryTypeSubscriptions from "../Subcomponents/EntryTypeSubscriptions";
import EntryTypeInvestments from "../Subcomponents/EntryTypeInvestments";

const Add = ({ setAdd, add }) => {
  // Function to handle closing the Add component
  const handleClose = () => {
    setAdd(false);
  };

  const [selectedValue, setSelectedValue] = useState("Income");

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const options = [
    "Income",
    "Expenses",
    "Investments",
    "Donations",
    "Subscriptions",
  ];

  const renderInputForm = () => {
    if (selectedValue === "Income") {
      return <EntryTypeIncome />;
    } else if (selectedValue === "Expenses") {
      return <EntryTypeExpenses />;
    } else if (selectedValue === "Investments") {
      return <EntryTypeInvestments />;
    } else if (selectedValue === "Donations") {
      return <EntryTypeDonations />;
    } else if (selectedValue === "Subscriptions") {
      return <EntryTypeSubscriptions />;
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50 w-full h-full">
      <div className="bg-white rounded-lg p-8 flex flex-col h-fit w-[calc(100vw/1.5)] lg:w-[calc(100vw/2)] gap-4 lg:gap-8">
        <h2 className="text-xl font-bold mb-4">Add Entry</h2>
        <div className="flex flex-col justify-center lg:items-center h-fit lg:flex-row gap-2 w-full">
          <p className="text-gray-600 text-sm w-1/3 text-nowrap">
            Select your entry type
          </p>
          <div className="flex flex-col gap-1 w-full h-full z-20">
            <EntryType options={options} onSelect={handleSelect} />
          </div>
        </div>
        <div>{renderInputForm()}</div>
        <div className="flex gap-4 lg:gap-10">
          <button
            onClick={handleClose}
            className="active-white-timerange rounded-sm border-gray-300 w-full inter-heading-2 border-2 md:border-2 text-sm font-light text-black capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-3"
          >
            Submit
          </button>
          <button
            onClick={handleClose}
            className="active-white-timerange rounded-sm border-gray-300 w-full inter-heading-2 border-2 md:border-2 text-sm font-light text-black capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-3"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
