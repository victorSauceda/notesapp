import React, { useState, useEffect } from "react";
import CheckListItem from "./CheckListItem";
import notes from "../data/notes";

const Content = () => {
  const [notesData, setNotesData] = useState(notes);
  const [isOnCompleted, setIsOnCompleted] = useState(false);
  const [addItemValue, setAddItemValue] = useState("");
  const handleChange = (id) => {
    const newNotes = notesData.map((note) => {
      if (note.id === id) {
        note.completed = !note.completed;
      }
      return note;
    });
    setNotesData(newNotes);
  };

  const handleCompleteClick = (id) => {
    const newNotes = notesData.map((note) => {
      if (note.id === id) {
        note.completed = !note.completed;
      }
      return note;
    });
    setNotesData(newNotes);
  };
  const handleAddItemClick = (value) => {
    const newNotes = [...notesData];
    newNotes.push({
      id: notesData.length - 1,
      text: value,
      completed: false,
    });
    setNotesData(newNotes);
    setAddItemValue("");
  };
  const notesLength = notesData.length;

  const checkListItem = notesData.map((note, idx) => {
    if (note.completed) {
      return (
        <CheckListItem
          lengthOfNotes={notesLength}
          handleChange={handleChange}
          key={note.id}
          idx={idx}
          handleCompleteClick={handleCompleteClick}
          data={note}
        />
      );
    }
  });
  const needToDo = notesData.map((note, idx) => {
    if (!note.completed) {
      return (
        <CheckListItem
          lengthOfNotes={notesLength}
          handleChange={handleChange}
          key={note.id}
          idx={idx}
          handleCompleteClick={handleCompleteClick}
          data={note}
        />
      );
    }
  });

  return (
    <>
      <input
        type="text"
        name="Add item"
        id="additem"
        onChange={(e) => setAddItemValue(e.target.value)}
        value={addItemValue}
      />
      <button onClick={() => handleAddItemClick(addItemValue)}>Add item</button>
      <button onClick={() => setIsOnCompleted(!isOnCompleted)}>
        {isOnCompleted ? "Need to do" : "Completed items"}
      </button>
      {isOnCompleted ? checkListItem : needToDo}
    </>
  );
};
export default Content;
