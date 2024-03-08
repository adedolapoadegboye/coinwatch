import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeRange = () => {
  const [dateButton, setDateButton] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const datePicker = () => {
    setDateButton(true);
    if (dateButton) {
      return (
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      );
    }
  };

  return (
    <button
      className="active-white-timerange hover:bg-black border-2 rounded-2xl border-gray-300 inter-heading-2 border-2 md:border-2 text-lg lg:text-sm font-light text-black capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-3"
      onClick={datePicker}
    >
      Select a time range
    </button>
  );
};

export default TimeRange;
