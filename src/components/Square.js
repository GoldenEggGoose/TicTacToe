import { useState } from "react";

const Square = ({value, onClick}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
