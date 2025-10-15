import React from 'react';
import { showFormattedDate } from '../utils/index';

const NoteItem = ({ note, handleDeleteNote, handleArchiveNote, handleStartEdit }) => {
  return (
    <div key={note.id} className="note-item">
      <div className="note-item__content">
        <div className="note-item__title">{note.title}</div>
        <div className="note-item__date">{showFormattedDate(note.createdAt)}</div>
        <div className="note-item__body">{note.body}</div>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => handleDeleteNote(note.id)}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => handleArchiveNote(note.id)}
        >
          {note.archived ? 'Unarchive' : 'Archive'}
        </button>
        <button
          className="note-item__edit-button"
          onClick={() => handleStartEdit(note.id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default NoteItem;