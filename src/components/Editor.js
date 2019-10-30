import React from 'react';
import { Link } from 'react-router-dom';


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            status: '',
            message:''
          }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(event) {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleAddStatus(this.state)
    }


    render() {
        return (
            <div>
                <h1>soy editor</h1>
                <fieldset>Añade un nuevo estado
                    <form>
                        <label>Fecha</label>
                        <input type='date' name='date' onChange={this.handleInput} />
                        <label>Estado</label>
                        <input type='radio' id='1' name='status' value='feliz' onChange={this.handleInput} /> :)
                        <input type='radio' id='1' name='status' value='triste' onChange={this.handleInput} /> :(
                    <label>Mensaje</label>
                        <input type='text-area' name='message' placeholder='¿Por qué ha sido un buen dia?' onChange={this.handleInput} />
                        <button className='input_submit' type='submit' onClick={this.handleSubmit}>Añadir</button>
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