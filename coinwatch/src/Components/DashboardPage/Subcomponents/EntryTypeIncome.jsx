import React, { useState } from "react";
import EntryType from "./EntryType";

const EntryTypeIncome = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
    notes: "",
  });

  const [dumb, setDumb] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    dumbRender();
  };

  const handleCategoryInputChange = (value) => {
    setFormData({
      ...formData,
      category: value,
    });
    dumbRender();
  };

  const dumbRender = () => {
    setDumb(!dumb);
  };

  console.log(formData);

  const options = [
    "Salary/Wage",
    "Passive Income",
    "Gift",
    "Royalty",
    "Freelance",
    "Commission",
    "Pension",
    "Others",
  ];

  return (
    <div className="flex flex-col gap-8 w-full h-full">
      <div className="flex flex-col justify-center lg:items-center h-fit lg:flex-row gap-2 w-full">
        <label
          htmlFor="name"
          className="text-gray-600 text-sm w-1/3 text-nowrap"
        >
          Label
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex flex-col justify-center lg:items-center h-fit lg:flex-row gap-2 w-full">
        <label
          htmlFor="amount"
          className="text-gray-600 text-sm w-1/3 text-nowrap"
        >
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="0"
          step="100"
          required
          value={formData.amount}
          onChange={handleInputChange}
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex flex-col justify-center lg:items-center h-fit lg:flex-row gap-2 w-full">
        <label
          htmlFor="category"
          className="text-gray-600 text-sm w-1/3 text-nowrap"
        >
          Income Type
        </label>
        <div className="flex flex-col gap-1 w-full h-full">
          <EntryType options={options} onSelect={handleCategoryInputChange} />
        </div>
      </div>
      <div className="flex flex-col justify-center lg:items-center h-fit lg:flex-row gap-2 w-full">
        <label
          htmlFor="notes"
          className="text-gray-600 text-sm w-1/3 text-nowrap"
        >
          Notes (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={5}
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>
    </div>
  );
};

export default EntryTypeIncome;
