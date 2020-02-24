import React, { Component } from 'react';
import Header from './Header';
import NotesList from './NotesList';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };
  addNote = () => {
    var newNote = {
      id: Date.now(),
      title: '',
      description: '',
      doesMatchSearch: true,
    };
    var newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };
  onType = (editMeId, updatedKey, updatedValue) => {
    var updateIdMatch = note => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          return {
            ...note,
            title: updatedValue
          };
        } else {
          return {
            ...note,
            description: updatedValue
          };
        }
      }
    };
    var updatedNotes = this.state.notes.map(updateIdMatch);
    this.setState({ notes: updatedNotes });
  };
  onSearch = e => {
    var searchText = e.target.value.toLowerCase();
    var updatedNotes = this.state.notes.map(note => {
      if (!searchText) {
        return {
          ...note,
          doesMatchSearch: true
        };
      } else {
        var title = note.title.toLowerCase();
        var description = note.description.toLowerCase();
        var titleMatch = title.includes(searchText);
        var descriptionMatch = description.includes(searchText);
        var hasMatch = titleMatch || descriptionMatch;
        return {
          ...note,
          doesMatchSearch: hasMatch
        };
      }
    });
    this.setState({ 
      searchText: searchText,
      notes: updatedNotes
    });
  }
    render() {
      return (
      <div>
        <Header 
          searchText={this.state.searchText} 
          addNote={this.addNote}
          onSearch={this.onSearch} 
        />
        <NotesList notes={this.state.notes} onType={this.onType} />
      </div>
    );
  }
}


export default App;
