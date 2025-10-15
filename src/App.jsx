import React, { useState, useEffect } from 'react';
import { getInitialData } from './utils';
import Header from '../src/components/Header';
import NoteInput from '../src/components/NoteInput';
import NotesActive from '../src/components/NotesActive';
import NotesArchived from '../src/components/NotesArchived';
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/style.css';

const App = () => {
  const initialData = getInitialData();
  const [notes, setNotes] = useState(initialData);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [newNote, setNewNote] = useState({
    title: '',
    body: '',
  });
  const [titleCharCount, setTitleCharCount] = useState(50);
  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const [bodyErrorMessage, setBodyErrorMessage] = useState('');
  const [editedNote, setEditedNote] = useState(null);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    if (inputName === 'title' && inputValue.length <= 50) {
      setTitleCharCount(50 - inputValue.length);
      if (editedNote) {
        setEditedNote({
          ...editedNote,
          [inputName]: inputValue,
        });
      } else {
        setNewNote({
          ...newNote,
          [inputName]: inputValue,
        });
      }
    } else if (inputName === 'body') {
      if (editedNote) {
        setEditedNote({
          ...editedNote,
          [inputName]: inputValue,
        });
      } else {
        setNewNote({
          ...newNote,
          [inputName]: inputValue,
        });
      }
    }
  };

  const handleInputFocus = (inputName) => {
    if (inputName === 'title') {
      setTitleErrorMessage('');
    } else if (inputName === 'body') {
      setBodyErrorMessage('');
    }
  };

  const handleAddNote = () => {
    if (
      newNote.title.trim() !== '' &&
      titleCharCount >= 0 &&
      newNote.body.trim() !== ''
    ) {
      setNotes([
        ...notes,
        {
          id: +new Date(),
          title: newNote.title,
          body: newNote.body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ]);
      setNewNote({
        title: '',
        body: '',
      });
      setTitleCharCount(50);
      setTitleErrorMessage('');
      setBodyErrorMessage('');
      Swal.fire({
        icon: 'success',
        title: 'Note added successfully!',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      if (newNote.title.trim() === '') {
        setTitleErrorMessage('Please fill out the title field.');
      } else {
        setTitleErrorMessage('');
      }
      if (newNote.body.trim() === '') {
        setBodyErrorMessage('Please fill out the body field.');
      } else {
        setBodyErrorMessage('');
      }
    }
  };

  const handleDeleteNote = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure you want to delete this note?',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        Swal.fire({
          icon: 'success',
          title: 'Note deleted successfully!',
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Deletion canceled.',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleArchiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const handleStartEdit = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setTitleCharCount(50 - noteToEdit.title.length);
    setEditedNote(noteToEdit);
    setNewNote({
      title: '',
      body: '',
    });
  };

  const handleSaveEdit = () => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === editedNote.id ? { ...editedNote } : note
      )
    );
    setEditedNote(null);

    setNewNote({
      title: '',
      body: '',
    });
    setTitleCharCount(50);
  
    Swal.fire({
      icon: 'success',
      title: 'Changes saved successfully!',
      showConfirmButton: false,
      timer: 2000,
    });
  };
  
  const handleCancelEdit = () => {
    setEditedNote(null);

    setNewNote({
      title: '',
      body: '',
    });
    setTitleCharCount(50);
  
    Swal.fire({
      icon: 'info',
      title: 'Edit canceled.',
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const activeNotes = notes.filter(
    (note) =>
      !note.archived &&
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const archivedNotes = notes.filter(
    (note) =>
      note.archived &&
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  useEffect(() => {
    if (editedNote) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [editedNote]);

  return (
    <div>
      <Header searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
      <div className="note-app__body">
        <NoteInput
          newNote={newNote}
          handleInputChange={handleInputChange}
          handleAddNote={handleAddNote}
          titleCharCount={titleCharCount}
          titleErrorMessage={titleErrorMessage}
          bodyErrorMessage={bodyErrorMessage}
          handleInputFocus={handleInputFocus}
          handleSaveEdit={handleSaveEdit}
          handleCancelEdit={handleCancelEdit}
          editedNote={editedNote}
        />
        <NotesActive
          activeNotes={activeNotes}
          handleDeleteNote={handleDeleteNote}
          handleArchiveNote={handleArchiveNote}
          handleStartEdit={handleStartEdit}
        />
        <NotesArchived
          archivedNotes={archivedNotes}
          handleDeleteNote={handleDeleteNote}
          handleArchiveNote={handleArchiveNote}
          handleStartEdit={handleStartEdit}
        />
      </div>
    </div>
  );
};

export default App;