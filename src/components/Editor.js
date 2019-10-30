import React from 'react';


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
                </fieldset>
            </div>
        )
    }
}

export default Editor;