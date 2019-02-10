import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = { //state must be se to an object
    persons: [
      { name: 'Max', age: 28 },
      { name: 'George', age: 29 },
      { name: 'Maxine', age: 26 },
    ]
  }

  switchNameHandler = () => {
    console.log("was clicked!");
    //DON'T do this: this.state.persons[2].name = "Hello"
    this.setState({persons: [
        { name: 'Max', age: 11 },
        { name: 'George', age: 23 },
        { name: 'Max', age: 33 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      <Person name="Manu" age="29">My Hobbies: Racing</Person>
      </div>
    );

    //nested element creation. createElement takes infinante arguments. This is cumbersome and not best practice.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hello!!!!!!!'));
  }
}

export default App;
