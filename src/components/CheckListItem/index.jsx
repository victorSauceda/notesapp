import React from "react";
import "./index.css";
const CheckListItem = (props) => {
  const { id, text, completed, lengthOfNotesd } = props.data;
  const { handleChange, handleCompleteClick, idx } = props;
  console.log(idx);
  return (
    <>
      <h3 style={{ color: "green" }} className="checkbox">
        {text}
        <input
          type="checkbox"
          id={id}
          onChange={() => handleChange(id)}
          checked={completed}
        />
        <button id={id} onClick={() => handleCompleteClick(id)}>
          Delete Note
        </button>
      </h3>
    </>
  );
};

export default CheckListItem;
