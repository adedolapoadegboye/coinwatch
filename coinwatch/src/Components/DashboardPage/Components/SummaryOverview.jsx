import React from "react";
import { TbBrandCashapp } from "react-icons/tb";
import { RiBankLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiDonateHeart } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";

const SummaryOverview = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex justify-start">
        <h2 className="inter-heading-2 text-xl capitalize text-black leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
          Summary
        </h2>
      </div>
      {/* Summary Cards */}
      <div className="grid gap-2 lg:grid-cols-6 lg:grid-flow-col lg:grid-rows-1 lg:gap-4 px-2">
        {/* Total Income Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL INCOME
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ 0</h3>
          </div>
          <div className="px-2">
            <TbBrandCashapp size={20} />
          </div>
        </div>
        {/* Available Balance Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              AVAILABLE BALANCE
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ 0</h3>
          </div>
          <div className="px-2">
            <RiBankLine size={20} />
          </div>
        </div>
        {/* Total Expenses Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL EXPENSES
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ 0</h3>
          </div>
          <div className="px-2">
            <BsCart4 size={20} />
          </div>
        </div>
        {/* Total Investments Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL INVESTMENTS
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ 0</h3>
          </div>
          <div className="px-2">
            <FaMoneyBillTrendUp size={20} />
          </div>
        </div>
        {/* Total Donations Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL DONATIONS
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ 0</h3>
          </div>
          <div className="px-2">
            <BiDonateHeart size={20} />
          </div>
        </div>
        {/* Total Subscriptions Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL SUBSCRIPTIONS
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ 0</h3>
          </div>
          <div className="px-2">
            <MdSubscriptions size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryOverview;
