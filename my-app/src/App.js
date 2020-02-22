import React from 'react';
// import logo from './logo.svg';
// import './App.css';

var App = () => (
  <div>
    <header>
      <h1>Super Sticky Notes</h1>
      <aside>
        <button>+ New Note</button>
        <input type="text" placeholder="Type here to search..."></input>
      </aside>
    </header>
    <ul>
      <li>
        <input type="text" placholder="title" />
        <textarea placeholder="Description..." />
        <span>X</span>
      </li>
      <li>
        <input type="text" placholder="title" />
        <textarea placeholder="Description..." />
        <span>X</span>
      </li>
      <li>
        <input type="text" placholder="title" />
        <textarea placeholder="Description..." />
        <span>X</span>
      </li>
    </ul>
  </div>
)

export default App;
