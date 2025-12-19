import React from "react";

import Card from "./components/Card";
import Header from "./components/Header";
import Selects from "./components/Selects";

import moon from "./assets/images/icon-moon.svg";
import sun from "./assets/images/icon-sun.svg";

function App() {
  let [isDark, setIsDark] = React.useState(true);
  let [isActive, setIsActive] = React.useState(false);
  let [isInactive, setIsInactive] = React.useState(false);
  let [isAll, setIsAll] = React.useState(true);

  function handleDark() {
    setIsDark((prev) => !prev);
  }

  function handleIsActive() {
    setIsActive((prev) => (prev = true));
    setIsInactive((prev) => (prev = false));
    setIsAll((prev) => (prev = false));
  }

  function hanldeIsInactive() {
    setIsInactive((prev) => (prev = true));
    setIsAll((prev) => (prev = false));
    setIsActive((prev) => (prev = false));
  }

  function handleIsAll() {
    setIsAll((prev) => (prev = true));
    setIsInactive((prev) => (prev = false));
    setIsActive((prev) => (prev = false));
  }
  return (
    <div className={isDark ? "dark " : "bg-blue-100/50"}>
      <div className="w-[90%] mx-auto  dark:bg-[linear-gradient(180deg,#040918_0%,#091540_100%)] dark:text-white min-h-screen flex flex-col justify-center items-center">
        <Header isdark={isDark} handledark={handleDark} />
        <Selects
          handleIsActive={handleIsActive}
          handleIsInActive={hanldeIsInactive}
          handleIsAll={handleIsAll}
        />
        <Card isActive={isActive} isInActive={isInactive} isAll={isAll} />
      </div>
    </div>
  );
}

export default App;
