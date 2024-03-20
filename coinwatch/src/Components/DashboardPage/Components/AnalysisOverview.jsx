/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const AnalysisOverview = () => {
  // State variables to store income and expenses overview data
  const [incomeOverviewData, setIncomeOverviewData] = useState(null);
  const [expensesOverviewData, setExpensesOverviewData] = useState(null);

  // Function to render income overview section
  const incomeOverview = (props) => {
    // Check if income overview data is null
    if (incomeOverviewData === null) {
      return (
        // Display message when there is no income data
        <h4 className="inter-heading-2 text-sm text-gray-500">Oops, No data</h4>
      );
    } else {
      // Render income overview data
      return (
        <h4 className="inter-heading-2 text-sm text-gray-500">
          {/* Render income overview data here */}
        </h4>
      );
    }
  };

  // Function to render expenses overview section
  const expensesOverview = () => {
    // Check if expenses overview data is null
    if (expensesOverviewData === null) {
      return (
        // Display message when there is no expenses data
        <h4 className="inter-heading-2 text-sm text-gray-500">Oops, No data</h4>
      );
    } else {
      // Render expenses overview data
      return (
        <h4 className="inter-heading-2 text-sm text-gray-500">
          {/* Render expenses overview data here */}
        </h4>
      );
    }
  };

  return (
    <div className="flex flex-col w-full h-full justify-start">
      {/* Title for the overview section */}
      <h2 className="inter-heading-2 text-xl capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
        Overview
      </h2>
      {/* Grid layout for income and expenses overview */}
      <div className="grid gap-2 lg:grid-cols-2 lg:grid-flow-col lg:gap-4 px-2 w-full h-full py-2">
        {/* Income overview section */}
        <div className="border-2 rounded-xl w-full h-[420px] md:w-full md:h-full px-2 py-2">
          {/* Title for the income overview */}
          <div className="max-w-fit max-h-fit">
            <h4 className="inter-heading-2 text-sm text-gray-500 w-full h-full">
              Income overview for the selected date range
            </h4>
          </div>
          {/* Render income overview data */}
          <div className="h-full w-full flex justify-center items-center">
            {incomeOverview()}
          </div>
        </div>
        {/* Expenses overview section */}
        <div className="border-2 rounded-xl w-full h-[420px] md:w-full md:h-full px-2 py-2">
          {/* Title for the expenses overview */}
          <div>
            <h4 className="inter-heading-2 text-sm text-gray-500">
              Expenses overview for the selected date range
            </h4>
          </div>
          {/* Render expenses overview data */}
          <div className="h-full w-full flex justify-center items-center">
            {expensesOverview()}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default AnalysisOverview;
