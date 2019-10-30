import React from 'react';
import { Link } from 'react-router-dom';


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            status: '',
        }
        this.handleDate = this.handleDate.bind(this)
        this.handleState = this.handleState.bind(this)
        // this.handleMessage=this.handleMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleDate(event) {
        const newDate = event.currentTarget.value;
        this.setState({
            date: newDate
        })
    }
    handleState(event) {
        const newStatus = event.currentTarget.value;
        console.log(newStatus)
        this.setState({
            status: newStatus
        })
    }
    // handleMessage(event) {
    //     const newMessage = event.currentTarget.value;
    //     console.log( newMessage)
    // }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleAddSmiley(this.state)
    }

    handleAddWish() {
        
    }


    render() {
        return (
            <div>
                <h1>soy editor</h1>
                <fieldset>Añade un nuevo estado
                    <form onSubmit={this.handleSubmit}>
                        <label>Fecha</label>
                        <input type='date' onChange={this.handleDate} />
                        <label>Estado</label>
                        <input type='checkbox' name='estado' value='feliz' onChange={this.handleState} /> :)
                        <input type='checkbox' name='estado' value='triste' onChange={this.handleState} /> :(
                    <label>Mensaje</label>
                        <input type='text-area' placeholder='¿Por qué ha sido un buen dia?' onChange={this.handleMessage} />
                        <button className='input_submit' type='submit'>Añadir</button>
                        <Link to='/'>
                            <input type='button' value="Cancelar" />
                        </Link>
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default Editor;