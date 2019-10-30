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
                        <p>{item.status === 'feliz'? <i className="far fa-smile-beam"></i>:<i className="far fa-frown-open"></i>?item.status === null:<p></p>}</p>
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