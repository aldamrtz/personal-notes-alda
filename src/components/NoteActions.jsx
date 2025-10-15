import React from 'react';

const NoteActions = ({ editedNote, handleAddNote, handleSaveEdit, handleCancelEdit }) => {
  return (
    <div>
      {editedNote ? (
        <div>
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleAddNote}>Add Note</button>
      )}
    </div>
  );
};

export default NoteActions;