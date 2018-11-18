import React, { Component } from 'react';
import './App.css';

class Note extends Component {
    state = {
        check: false
    }
    checkTask() {
        this.setState(prevState => ({
            check: !prevState.check
        }));
    }
    render() {
        return (
            <div className={`note ${this.state.check ? "noteDone" : null}`} onClick={this.checkTask.bind(this)}>
                {this.props.text} {this.state.check ? (<span style={{
                    paddingLeft: "30%",
                    color: "#fff"
                }}>Bravo Fiki!!!</span>) : null} <input className="check" checked={this.state.check} type="checkbox" value="Done"></input>
            </div>
        );
    }
}

export default Note;
