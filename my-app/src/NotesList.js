import React from 'react';
import Note from './Note';
// list of all notes, importing single note
// using props to render the note elements, and filter through search

const keepSearchMatches = note => note.doesMatchSearch;

var NotesList = props => {
    var renderNote = note => (
        <Note 
            note={note} 
            key={note.id} 
            onType={props.onType}
            remove={props.remove} 
        />
    );

    var searchMatches = props.notes.filter(keepSearchMatches);
    var noteElements = searchMatches.map(renderNote);
    return <ul className="notes-list">{noteElements}</ul>
};

export default NotesList;