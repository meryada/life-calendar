import React from 'react';
import Home from './components/Home';
import Editor from './components/Editor';
import SmileyDetail from './components/SmileyDetail';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const smileys = [
  {
    date: '',
    status: '',
    message: ''
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
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Home 
              smileys={smileys}
              />
            )
          }}/>
          <Route  path="/editor" render={() => {
            return (
              <Editor
              handleAddStatus={this.handleAddStatus} 
              />
            )
          }}/>
          <Route path="/detail" component={SmileyDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
