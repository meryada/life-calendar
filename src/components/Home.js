import React from 'react';
import AddSmiley from './AddSmiley';
import CalendarSmiley from './CalendarSmiley'



class Home extends React.Component {
render() {
    return(
        <div>
        <h1>soy home</h1>
        <AddSmiley/>
        <CalendarSmiley/>
        </div>
    )
}
}

export default Home;