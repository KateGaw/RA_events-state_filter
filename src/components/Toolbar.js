import React from "react";

const Toolbar = (props) => {
  return (
    <>
      {props.filters.map((item, index) => (
        <button
          key={index}
          className={(props.selected === item) ? "btn-selected" : "button"}
          onClick={() => props.onSelectFilter(item)}
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default Toolbar;
