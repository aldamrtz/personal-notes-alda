import React from 'react';
import NoteItem from './NoteItem';

const NotesActive = ({ activeNotes, handleDeleteNote, handleArchiveNote, handleStartEdit }) => {
  return (
    <div className="notes-list">
      <h2>Active Notes</h2>
      <div className="notes-list__section">
        {activeNotes.length > 0 ? (
          activeNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              handleDeleteNote={handleDeleteNote}
              handleArchiveNote={handleArchiveNote}
              handleStartEdit={handleStartEdit}
            />
          ))
        ) : (
          <div className="notes-list__empty-message">No active notes found.</div>
        )}
      </div>
    </div>
  );
};

export default NotesActive;
