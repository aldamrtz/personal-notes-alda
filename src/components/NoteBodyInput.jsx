import React from 'react';

const NoteBodyInput = ({ editedNote, newNote, handleInputChange, bodyErrorMessage, handleInputFocus }) => {
  const { body } = editedNote ? editedNote : newNote;

  return (
    <div className="input-group">
      <textarea
        id="IsiCatatan"
        placeholder="Enter your note content here..."
        name="body"
        required
        value={body}
        onChange={handleInputChange}
        onFocus={() => handleInputFocus('body')}
        className={`note-body-input ${bodyErrorMessage ? 'error' : ''}`}
      />
      {bodyErrorMessage && (
        <div className="error-message">
          <i className="bi bi-exclamation-circle"></i> {bodyErrorMessage}
        </div>
      )}
    </div>
  );
};

export default NoteBodyInput;