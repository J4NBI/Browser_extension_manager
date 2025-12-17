import React from "react";

import Card from "./components/Card";
import Header from "./components/Header";
import Selects from "./components/Selects";

import moon from "./assets/images/icon-moon.svg";
import sun from "./assets/images/icon-sun.svg";

function App() {
  let [isDark, setIsDark] = React.useState(true);

  function handleDark() {
    setIsDark((prev) => !prev);
  }
  return (
    <div className={isDark ? "dark " : "bg-blue-100/50"}>
      <div className="w-[90%] mx-auto  dark:bg-[linear-gradient(180deg,#040918_0%,#091540_100%)] dark:text-white min-h-screen flex flex-col justify-center items-center">
        <Header isdark={isDark} handledark={handleDark} />
        <Selects />
        <Card />
      </div>
    </div>
  );
}

export default App;
