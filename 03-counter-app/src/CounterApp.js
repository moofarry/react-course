import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

const CounterApp = ({ value }) => {

  return (
      <>
          <h1> CounterApp </h1>
          {/* <pre> {  JSON.stringify( saludo, null, 3 )  } </pre> */}
          <h2> {value}</h2>
      </>
  );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;


