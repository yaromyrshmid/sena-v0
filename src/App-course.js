import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  state = {
    persons: [
        { id: '1', name: 'Petro', age: 29},
        { id: '2', name: 'Peerere', age: 239},
        { id: '3', name: 'Pfsadfds', age: 232},
      ],
    otherState: 'other',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = {...this.state.persons};
    persons[personIndex] = person;
    console.log(this.state);
    this.setState( {persons: persons} );
    console.log(this.state);
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={()=>this.deletePersonHandler(index)} 
          name={person.name} 
          age={person.age} key={person.id} 
          changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
      </div>
      );
    }

    return (
      <div className="App">
        <h1>React app</h1>
        <button onClick={this.togglePersonsHandler}> Switch name </button>
        { persons }
      </div>
    );
  }  
}

export default App;