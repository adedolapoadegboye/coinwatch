import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome, IoCashSharp, IoSettings } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";
import { BsPiggyBankFill } from "react-icons/bs";
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Navbar = (props) => {
  const { theme } = props;
  return (
    <nav
      className={`nav-${theme} flex flex-col gap-4 noto-sans-1 h-screen pe-5`}
    >
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
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
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
          ].join(" ")
        }
      >
        <IoHome /> Home
      </NavLink>
      <NavLink
        to="/income"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
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
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
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
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
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
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
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
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
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
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
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
