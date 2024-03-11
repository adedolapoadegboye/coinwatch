import React, { useState, useEffect } from "react";
import EntryType from "./EntryType";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EntryTypeIncome = ({ handleIncomeForm }) => {
  const firstDayOfMonth = new Date();
  firstDayOfMonth.setDate(1); // Set the date to the first day of the month
  const [formData, setFormData] = useState({
    date: firstDayOfMonth, // Set default value for date field
    amount: "",
    category: "Salary/Wage", // Set default value for category field
    notes: "",
  });

  useEffect(() => {
    // Trigger the function to handle income form data whenever formData changes
    console.log(formData);
    handleIncomeForm(formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // dumbRender();
  };

  const handleCategoryInputChange = (value) => {
    setFormData({
      ...formData,
      category: value,
    });
    // dumbRender();
  };

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

  //   const [endDate, setEndDate] = useState(new Date());
  const [dateButton, setDateButton] = useState(false);
  const [startDate, setStartDate] = useState(firstDayOfMonth);

  // Calculate the first day of the current month

  // Function to handle date selection
  const handleDateChange = (date) => {
    // const [start, end] = dates;
    setStartDate(date);
    // setEndDate(end);
    setFormData({
      ...formData,
      date: date,
    });
    // dumbRender();
  };

  // Function to toggle date picker visibility
  const toggleDatePicker = () => {
    setDateButton(!dateButton);
  };

  // Function to format date in "MMMM d, yyyy" format
  const formatDate = (date) => {
    // Check if date is null or undefined
    if (!date) return "";

    // Options for date formatting
    const options = { month: "long", day: "numeric", year: "numeric" };

    // Format the date using toLocaleDateString() method
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="flex flex-col justify-center lg:items-center h-fit lg:flex-row gap-2 w-full">
        <label
          htmlFor="name"
          className="text-gray-600 text-sm w-1/3 text-nowrap"
        >
          Date Received
        </label>
        <div className="w-full flex flex-col gap-2 relative">
          <button
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            onClick={toggleDatePicker}
          >
            {`${formatDate(startDate)}`}
          </button>
          {dateButton && (
            <div className="flex justify-center gap-2 z-20">
              <DatePicker
                showIcon
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                // endDate={endDate}
                inline
                // minDate={new Date()} // Disable past dates
                maxDate={new Date()} // Set maximum date to one week from start date
              />
            </div>
          )}
        </div>
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
