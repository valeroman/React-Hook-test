
import React, { useRef } from 'react';

export const FocusScreen = () => {

  // El useRef permite mantener alguna referencia y cuando esa referencia cambia
  // No permite realizar una renderizacion del componente
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input
            ref={ inputRef } 
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button 
          className="btn btn-primary mt-2"
          onClick={ onClick }
        >
          Set focus
        </button>
    </>
  )
}
