import React from 'react';
import { Link } from 'react-router-dom';


class Editor extends React.Component {
    render() {
        return (
            <div>
                <h1>soy editor</h1>
                <fieldset>Añade un nuevo estado
                    <label>Fecha</label>
                        <input type='date' />
                    <label>Estado</label>
                        <input type='checkbox' name='estado' value='feliz' /> :)
                        <input type='checkbox' name='estado' value='triste' /> :(
                    <label>Mensaje</label>
                        <input type='text-area' placeholder='¿Por qué ha sido un buen dia?' />
                        <input type='submit' />
                        <Link to='/'>
                            <input type='button' value="Cancelar"/>
                        </Link>
                        
                </fieldset>
            </div>
        )
    }
}

export default Editor;