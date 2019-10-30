import React from 'react';
import Home from './components/Home';
import Editor from './components/Editor';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const smileys = [
  {
    date: 'Hoy',
    status: 'feliz',
    message: 'coding'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smileys: smileys,
    }
    this.handleAddStatus=this.handleAddStatus.bind(this)
  }

  handleAddStatus(item) {
    this.setState({
      smileys: [...this.state.smileys, item]
    })
  }

  render() {
    console.log(this.state.smileys);
    const { smileys } = this.state
    return (

      <div className="App">

        <Home
          smileys={smileys}
        />
        <Editor 
        handleAddStatus={this.handleAddStatus}
        />

      </div>
    );
  }
}

export default App;
