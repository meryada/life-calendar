import React from 'react';

class CalendarSmiley extends React.Component {
    
    render() {
        const {smileys} = this.props
        console.log(smileys)
        return(
            <div>
            <h2>calendario</h2>
            <ul>
                {smileys.map((item, index)=> {
                    return (
                        <li key={index}>
                        <p>{item.date}</p>    
                        <p>{item.status}</p>
                        <p>{item.message}</p>
                        </li>
                    )
                })}
            </ul>
            </div>
        )
    }
}

export default CalendarSmiley;