import React, { Component } from 'react';
import Note from "./note.js"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
      notes: []
    }
  }

  updateNotes(noteText) {
    this.setState({ noteText: noteText.target.value })
  }


  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (this.state.noteText === "") { return }
      let noteArr = this.state.notes;
      noteArr.push(this.state.noteText);
      this.setState({ notes: noteArr }, () => { this.setState({ noteText: "" }) })
    }
  }
  deleteNote(index) {
    let noteArr = this.state.notes;
    noteArr.splice(index, 1)
    this.setState({ notes: noteArr })
  }
  addNote() {
    if (this.state.noteText === "") { return }
    let noteArr = this.state.notes;
    noteArr.push(this.state.noteText);
    this.setState({ notes: noteArr }, () => { this.setState({ noteText: "" }) })
    this.textInput.focus();
  }
  render() {
    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val} deleteNote={() => this.deleteNote(key)}></Note>
    })
    return (
      <div className="container">
        <div className="btn" onClick={this.addNote.bind(this)}>+</div>
        <div className="header">To Do App for Fiki (klikni na task kad zavrsis)</div>
        {notes}
        <input type="text" className="textInput"
          ref={((input) => { this.textInput = input })}
          onChange={noteText => this.updateNotes(noteText)}
          value={this.state.noteText}
          onKeyPress={this.handleKeyPress}
        ></input>
      </div>
    );
  }
}

export default App;
