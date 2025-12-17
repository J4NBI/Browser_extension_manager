// Header.tsx
import React from "react";
import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";

interface HeaderProps {
  isdark: boolean;
  handledark: () => void;
}

const Header: React.FC<HeaderProps> = ({ isdark, handledark }) => {
  return (
    <header className="px-4 py-4 flex justify-between bg-white dark:bg-neutral-800 items-center my-8 w-[90%] rounded-xl">
      <div className="">
        <img className="w-60 dark:invert" src={logo} alt="logo Extenssions" />
      </div>

      <button onClick={() => handledark()}>
        {isdark ? (
          <img
            className="w-full p-2 rounded-sm bg-gray-200 dark:bg-neutral-700"
            src={sun}
            alt="icon sun"
          />
        ) : (
          <img
            className="w-full p-2 rounded-sm bg-gray-200  "
            src={moon}
            alt="icon moon"
          />
        )}
      </button>
    </header>
  );
};

export default Header;
