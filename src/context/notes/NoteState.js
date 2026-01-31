import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
  const host = "http://localhost:5000";

  // ✅ Auth token ko localStorage se lo
  const authToken = localStorage.getItem("token");   // yaha space mat dena

  const [notes, setNotes] = useState([]);

  // Get all Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken
      },
    });
    const json = await response.json();
    setNotes(Array.isArray(json) ? json : []);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken
      }
    });

    setNotes(notes.filter(note => note._id !== id));
  };

  // Edit a Note (API call + local state update)
  const editNote = async (id, title, description, tag) => {
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken
      },
      body: JSON.stringify({ title, description, tag })
    });

    // ✅ Local state update
    const newNotes = notes.map((note) =>
      note._id === id ? { ...note, title, description, tag } : note
    );
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;