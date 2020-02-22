import React from 'react';
import Note from './Note';

const keepSearchMatches = note => note.doesMatchSearch;
const renderNote = note => <Note note={note} key={note.id} />;

var NotesList = props => {
    var searchMatches = props.notes.filter(keepSearchMatches);
    var noteElements = searchMatches.map(renderNote);
    return <ul className="notes-list">{noteElements}</ul>
};

export default NotesList;