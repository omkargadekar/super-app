import React, { useState, useEffect } from "react";
import "./notes.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="notescomp">
      <h4 className="notes-tag">Notes App</h4>
      <div className="note-form">
        <textarea
          className="notes-text"
          placeholder="Add a new note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button className="notes-btn" onClick={addNote}>
          +
        </button>
      </div>
      <div className="notes">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p>{note}</p>
            <button className="notes-del" onClick={() => deleteNote(index)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
