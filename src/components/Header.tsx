// Header.tsx
import React from "react";

interface HeaderProps {
  isdark: boolean;
  handledark: () => void;
}

const Header: React.FC<HeaderProps> = ({ isdark, handledark }) => {
  return (
    <header className="p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">Extensions</h1>
      </div>

      <button onClick={() => handledark()}>{isdark ? "🌙" : "☀️"}</button>
    </header>
  );
};

export default Header;
