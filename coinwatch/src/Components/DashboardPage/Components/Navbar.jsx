import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome, IoCashSharp, IoSettings } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";
import { BsPiggyBankFill } from "react-icons/bs";
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="nav-white flex flex-col gap-4 noto-sans-1 h-screen">
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending-white" : "inactive-white",
            isActive ? "active-white" : "inactive-white",
            isTransitioning ? "transitioning-white" : "inactive-white",
          ].join(" ")
        }
      >
        <RiMoneyDollarCircleFill size={50} />
      </NavLink>
      <NavLink
        to="/homepage"
        end
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending-white" : "inactive-white",
            isActive ? "active-white" : "inactive-white",
            isTransitioning ? "transitioning-white" : "inactive-white",
          ].join(" ")
        }
      >
        <IoHome /> Home
      </NavLink>
      <NavLink
        to="/income"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending-white" : "inactive-white",
            isActive ? "active-white" : "inactive-white",
            isTransitioning ? "transitioning-white" : "inactive-white",
          ].join(" ")
        }
      >
        <IoCashSharp />
        Income
      </NavLink>
      <NavLink
        to="/expenses"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending-white" : "inactive-white",
            isActive ? "active-white" : "inactive-white",
            isTransitioning ? "transitioning-white" : "inactive-white",
          ].join(" ")
        }
      >
        <GiPayMoney />
        Expenses
      </NavLink>
      <NavLink
        to="/investments"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending-white" : "inactive-white",
            isActive ? "active-white" : "inactive-white",
            isTransitioning ? "transitioning-white" : "inactive-white",
          ].join(" ")
        }
      >
        <BsPiggyBankFill />
        Investments
      </NavLink>
      <NavLink
        to="/donations"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending-white" : "inactive-white",
            isActive ? "active-white" : "inactive-white",
            isTransitioning ? "transitioning-white" : "inactive-white",
          ].join(" ")
        }
      >
        <BiSolidDonateHeart />
        Donations
      </NavLink>
      <NavLink
        to="/subscriptions"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending-white" : "inactive-white",
            isActive ? "active-white" : "inactive-white",
            isTransitioning ? "transitioning-white" : "inactive-white",
          ].join(" ")
        }
      >
        <MdSubscriptions />
        Subscriptions
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending-white" : "inactive-white",
            isActive ? "active-white" : "inactive-white",
            isTransitioning ? "transitioning-white" : "inactive-white",
          ].join(" ")
        }
      >
        <IoSettings />
        Settings
      </NavLink>
    </nav>
  );
};

export default Navbar;
