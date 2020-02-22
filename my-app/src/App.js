import React from 'react';
// import logo from './logo.svg';
// import './App.css';

var App = () => (
  <div>
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new">+ New Note</button>
        <input className="search" type="text" placeholder="Type here to search..."></input>
      </aside>
    </header>
    <ul className="notes-list">
      <li className="note">
        <input className="note__title" type="text" placeholder="title" />
        <textarea className="note__description" placeholder="Description..." />
        <span className="note__delete">X</span>
      </li>
      <li className="note">
        <input className="note__title" type="text" placeholder="title" />
        <textarea className="note__description" placeholder="Description..." />
        <span className="note__delete">X</span>
      </li>
      <li className="note">
        <input className="note__title" type="text" placeholder="title" />
        <textarea className="note__description" placeholder="Description..." />
        <span className="note__delete">X</span>
      </li>
    </ul>
  </div>
);

export default App;
