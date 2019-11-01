import React from 'react';

class CalendarSmiley extends React.Component {

    render() {
        const { smileys } = this.props
        console.log(smileys[1])
        if (smileys[1]) {
            return (
                <div>
                    <h2>calendario</h2>
                    <ul>
                        {smileys.map((item, index) => {
                            return (
                                <li key={index}>
                                    <p>{item.date}</p>
                                    <p>{item.status === 'feliz' ? <i className="far fa-smile-beam"></i> : <i className="far fa-frown-open"></i>}</p>
                                    <p>{item.message}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <p>no hay ningún estado</p>
            )
        }
    }
}

export default CalendarSmiley;