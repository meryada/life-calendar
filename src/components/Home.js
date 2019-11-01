import React from 'react';
import SmileyAdd from './SmileyAdd';
import SmileyList from './SmileyList';
import { Link } from 'react-router-dom';



class Home extends React.Component {
render() {
    const {smileys} = this.props
    return(
        <div>
        <h1>Life Calendar</h1>
        <Link to='/editor'>
        <SmileyAdd/>
        </Link>
        <SmileyList
        smileys={smileys}
        />
        </div>
    )
}
}

export default Home;