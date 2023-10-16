// Note.js
import React from "react";

const Note = ({ note, onDelete }) => {
  return (
    <div className="note">
      <div className="content">{note.content}</div>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default Note;
