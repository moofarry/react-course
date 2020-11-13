import React, {useState} from 'react'; //hook useState
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';
//fucnion por referencia

const CounterApp = ({ value= 10 }) => {

    const [counter , setCounter] = useState(value); // retorna arreglo

    const handleAddFunc = () => setCounter(counter+1);
    const handleAddBackFunc = () => setCounter(counter-1    );
    const handleAddResetFunc = () =>  setCounter( value);

    return (
      <div>
          <h1> CounterApp </h1>
          {/* <pre> {  JSON.stringify( saludo, null, 3 )  } </pre> */}
          <h2> {counter}</h2>
          <button id="#increment" onClick= { handleAddFunc }> + 1 </button> 
          <button id="#decrement" onClick= { handleAddResetFunc }> Reset </button> 
          <button id="#reset" onClick= { handleAddBackFunc }> - 1 </button> 
      </div>
  );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;


