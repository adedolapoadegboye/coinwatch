import React from "react";
import { useState } from "react";

const AnalysisOverview = () => {
  const [incomeOverviewData, setIncomeOverviewData] = useState(null);
  const [expensesOverviewData, setExpensesOverviewData] = useState(null);
  const incomeOverview = () => {
    if (incomeOverviewData === null) {
      return (
        <h4 className="inter-heading-2 text-sm text-gray-500">
          {" "}
          Oops, No data
        </h4>
      );
    } else {
      return (
        <h4 className="inter-heading-2 text-sm text-gray-500">
          {" "}
          Oops, No data
        </h4>
      );
    }
  };

  const expensesOverview = () => {
    if (expensesOverviewData === null) {
      return (
        <h4 className="inter-heading-2 text-sm text-gray-500">
          {" "}
          Oops, No data
        </h4>
      );
    } else {
      return (
        <h4 className="inter-heading-2 text-sm text-gray-500">
          {" "}
          Oops, No data
        </h4>
      );
    }
  };
  return (
    <div className="flex flex-col w-full h-full justify-start">
      {" "}
      <h2 className="inter-heading-2 text-xl capitalize text-black leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
        Overview
      </h2>
      <div className="grid gap-2 lg:grid-cols-2 lg:grid-flow-col lg:gap-4 px-2 w-full h-full py-2">
        <div className="border-2 rounded-xl w-full h-[420px] md:w-full md:h-full px-2 py-2">
          <div className="max-w-fit max-h-fit">
            <h4 className="inter-heading-2 text-sm text-gray-500 w-full h-full">
              Income overview for the selected date range
            </h4>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            {incomeOverview()}
          </div>
        </div>
        <div className="border-2 rounded-xl w-full h-[420px] md:w-full md:h-full px-2 py-2">
          <div>
            <h4 className="inter-heading-2 text-sm text-gray-500">
              Expenses overview for the selected date range
            </h4>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            {expensesOverview()}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default AnalysisOverview;
