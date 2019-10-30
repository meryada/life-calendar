import React from 'react';
import Home from './components/Home';
import Editor from './components/Editor';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smileys: [],
      newSmiley: {}
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/editor' component={Editor} />
        </Switch>
      </div>
    );
  }
}

export default App;
