import React from 'react';

const NoteTitleInput = ({ title, handleInputChange, titleCharCount, titleErrorMessage, handleInputFocus }) => {
  return (
    <div className="input-group">
      <div className="note-input__title__char-limit">
        {titleCharCount} characters left
      </div>
      <input
        id="Judul"
        type="text"
        placeholder="Title"
        name="title"
        required
        value={title}
        onChange={handleInputChange}
        onFocus={() => handleInputFocus('title')}
        className={titleErrorMessage ? 'error' : ''}
      />
      {titleErrorMessage && (
        <div className="error-message">
          <i className="bi bi-exclamation-circle"></i> {titleErrorMessage}
        </div>
      )}
    </div>
  );
};

export default NoteTitleInput;
