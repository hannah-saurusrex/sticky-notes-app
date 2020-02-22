import React from 'react';

var Header = props => (
    <header>
        <h1 className="app-header__title">Super Sticky Notes</h1>
        <aside className="app-header__controls">
        <button className="add-new">+ New Note</button>
        <input 
            className="search" 
            type="text" 
            placeholder="Type here to search..."
            value={props.searchText}>
        </input>
        </aside>
    </header>
);

export default Header;