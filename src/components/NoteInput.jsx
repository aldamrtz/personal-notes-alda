import React from 'react';
import NoteTitleInput from './NoteTitleInput';
import NoteBodyInput from './NoteBodyInput';
import NoteActions from './NoteActions';

const NoteInput = ({
  newNote,
  editedNote,
  handleInputChange,
  handleInputFocus,
  handleAddNote,
  handleSaveEdit,
  handleCancelEdit,
  titleCharCount,
  titleErrorMessage,
  bodyErrorMessage,
}) => {
  const isEditing = !!editedNote;

  return (
    <div className="note-input">
      <h2>{isEditing ? 'Edit Note' : 'Add New Note'}</h2>
      <NoteTitleInput
        title={isEditing ? editedNote.title : newNote.title}
        handleInputChange={handleInputChange}
        titleCharCount={titleCharCount}
        titleErrorMessage={titleErrorMessage}
        handleInputFocus={handleInputFocus}
      />
      <NoteBodyInput
        editedNote={editedNote}
        newNote={newNote}
        handleInputChange={handleInputChange}
        bodyErrorMessage={bodyErrorMessage}
        handleInputFocus={handleInputFocus}
      />
      <NoteActions
        editedNote={editedNote}
        handleAddNote={handleAddNote}
        handleSaveEdit={handleSaveEdit}
        handleCancelEdit={handleCancelEdit}
      />
    </div>
  );
};

export default NoteInput;