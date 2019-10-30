import React from 'react';
import AddSmiley from './AddSmiley';
import CalendarSmiley from './CalendarSmiley';
import { Link } from 'react-router-dom';



class Home extends React.Component {
render() {
    return(
        <div>
        <h1>soy home</h1>
        <Link to='/editor'>
        <AddSmiley/>
        </Link>
        <CalendarSmiley/>
        </div>
    )
}
}

export default Home;