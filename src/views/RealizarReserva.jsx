import React from 'react';
import styled from 'styled-components';

const RealizarReserva = () => {
  return (
    <StyledWrapper>
      <div className='container'>
      <div className="card">
        <div className="card2">
            <form>
            <input placeholder="nombre" class="input" type="text"/>
            <input placeholder="numero de personasr "class="input" type="text"/>    
         < input  class="input" type="date"/>
         <input class="input" type="time"/>
         <button className='send'>Enviar</button>

            </form>
        </div>
      </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
/* From Uiverse.io by catraco */ 
.container {
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
    -45deg,
    orange 0,
    transparent 30px,
    orangered 30px,
    transparent 60px,
    orange 120px,
    transparent 240px
  );
  background-color: orange;
}


.card {
    width: 30vw;
    height: 35vh;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 20px;
    transition: all .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0; /* Eliminar padding interno */
}

.card2 {
    width: 85%; /* Ocupa 85% del ancho de .card */
    height: 85%; /* Ocupa 85% del alto de .card */
    background-color: #1a1a1a;
    border-radius: 10px;
    transition: all .2s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0; /* Eliminar padding interno */
}

.card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
}

.card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}

.form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background: linear-gradient(to bottom, #0077be, #3b8df2);
    border-radius: 10px;
    overflow: hidden;
    perspective: 1000px;
    transform-style: preserve-3d;
    transform: rotateX(-10deg);
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    animation: form-animation 0.5s ease-in-out;
    width: 85%; /* Ocupa 85% del ancho de .card2 */
    height: 85%; /* Ocupa 85% del alto de .card2 */
    box-sizing: border-box; /* Incluye padding en el tamaño total */
}

@keyframes form-animation {
    from {
        transform: rotateX(-30deg);
        opacity: 0;
    }
    to {
        transform: rotateX(0deg);
        opacity: 1;
    }
}

.input {
    padding: 10px;
    border-radius: 5px;
    background-color: transparent;
    transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    color: rgb(255, 255, 255);
    border: 2px solid #3b8df2;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    width: 100%; /* Ocupa el 100% del ancho del form */
    box-sizing: border-box; /* Incluye padding y border en el ancho */
}

.input::placeholder {
    color: #fff;
}

.input:hover,
.input:focus {
    border-color: #3b8df2;
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05) rotateY(20deg);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    outline: none;
}

.send {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    width: 100%; /* Ocupa el 100% del ancho del form */
    height: 50px;
    background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
    border-radius: 30px;
    border: 1px solid #8F9092;
    transition: all 0.2s ease;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #606060;
    text-shadow: 0 1px #fff;
    margin-top: auto; /* Empuja el botón hacia abajo */
}

.send:hover {
    box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 3px #CECFD1;
}

.send:active {
    box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
}

.send:focus {
    box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
}

`;

export default RealizarReserva;
