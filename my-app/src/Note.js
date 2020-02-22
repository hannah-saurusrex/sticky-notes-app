import React from 'react';

var Note = props => (
    <li className="note">
        <input 
            className="note__title" 
            type="text" 
            placeholder="title"
            value={props.note.title} />
        <textarea 
            className="note__description" 
            placeholder="Description..."
            value={props.note.description} />
        <span className="note__delete">X</span>
    </li>
);

export default Note;