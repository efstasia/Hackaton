/* eslint-disable */
import React, {useState, useEffect} from "react";

export const MyNotes = () => {
    // const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [category, setCategory] = useState('')
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
          return JSON.parse(savedNotes);
        }
        return [];
      });

      useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
      }, [notes]);

    const categories = [
        {name: 'WordPress'},
        {name: 'React'},
        {name: 'Todos'},
        {name: 'Functions'},
    ]

    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    const addNote = (event) => {
        event.preventDefault();
        setNotes([...notes, `${newNote} - ${category}`]);
        setNewNote("");
      };

    const deleteNote = (index) => {
        const updatedNotes = notes.filter((note, i) => i !== index);
        setNotes(updatedNotes);
      };


    return (
        <div className="note-container">
            <h2>My Notes</h2>
            <form className="notes-form" onSubmit={addNote}>
                <input required placeholder="Write a note here.." type='text' value={newNote} onChange={handleNoteChange} />
                <select className="note-category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Category</option>
                    {categories.map((category) => (
                        <option key={category.name} value={category.name}>{category.name}</option>
                    ))}
                </select>
                <button className="btn centered" type="submit">Add Note</button>
            </form>
            { !notes.length ? <div className="no-notes"><p>No notes are added yet</p></div> : 
            <div>
            <ul className="notes-list">
            {notes.map((note, index) => (
                <li key={index}>{note} <button className="btn" onClick={() => deleteNote(index)}>X</button></li>
            ))}
            </ul>
            </div>
            }
      </div>
    )

}