import React, { Component } from 'react';
import { Navigation } from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: {
        tools: [
          {id: 'storage', name: 'Склад', icon: 'warehouse', active: false},
          {id: 'exp', name: 'Витрати', icon: 'sign-out', active: false},
          {id: 'income', name: 'Продажі', icon: 'sign-in', active: false},
          {id: 'planner', name: 'Планер', icon: 'calendar alternate outline', active: false},
          {id: 'analys', name: 'Аналіз', icon: 'chart area', active: false},
          {id: 'shop', name: 'Магазин', icon: 'cart', active: false},
          {id: 'legalize', name: 'Легалізувати', icon: 'legal', active: false},
          {id: 'home', name: 'Інструменти', icon: 'home', active: true}
        ]
      }
    };
  }

  handleToolActivation = (index) => {
    console.log('clicked', index);
    const navigation = JSON.parse(JSON.stringify(this.state.navigation))
    console.log(navigation);
    
    if (!navigation.tools[index].active) {
      navigation.tools.forEach ((tool, index) => {
        navigation.tools[index].active = false;
      });
      navigation.tools[index].active = true;
    }
    this.setState({ navigation: navigation });
  }

  render() {
    return (
      <div>
        <Navigation tools={this.state.navigation.tools} click_tool={this.handleToolActivation}/>
        <Sidebar tools={this.state.navigation.tools} click_tool={this.handleToolActivation}/>
      </div>
    );
  }  
}

export default App;