import React from 'react';
import Note from './Note';

var NotesList = () => (
    <ul className="notes-list">
        <Note />
        <Note />
        <Note />
    </ul>
);

export default NotesList;