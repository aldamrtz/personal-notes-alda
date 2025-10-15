import React from 'react';
import NoteItem from './NoteItem';

const NotesArchived = ({ archivedNotes, handleDeleteNote, handleArchiveNote, handleStartEdit }) => {
  return (
    <div className="notes-list">
      <h2>Archived Notes</h2>
      <div className="notes-list__section">
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              handleDeleteNote={handleDeleteNote}
              handleArchiveNote={handleArchiveNote}
              handleStartEdit={handleStartEdit}
            />
          ))
        ) : (
          <div className="notes-list__empty-message">No archived notes found.</div>
        )}
      </div>
    </div>
  );
};

export default NotesArchived;