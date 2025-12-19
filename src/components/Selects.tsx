import React from "react";

const Selects = (props: any) => {
  return (
    <div className="w-[80%] mb-10 flex flex-col justify-center items-center md:justify-between  md:flex-row">
      <h1 className="text-[clamp(1rem,9vw+0.1rem,2rem)] font-semibold md:self-baseline-last">
        Extensions List
      </h1>
      <div className="flex justify-between gap-4 mt-4">
        <button onClick={props.handleIsAll} className="select-btn">
          All
        </button>
        <button onClick={props.handleIsActive} className="select-btn">
          Active
        </button>
        <button onClick={props.handleIsInActive} className="select-btn">
          Inactive
        </button>
      </div>
    </div>
  );
};

export default Selects;
