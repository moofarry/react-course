import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp'
import './index.css'

//const saludo = <h1> Hola Mundo</h1> ;
const divRoot = document.querySelector('#root');

const cedula = 5;


ReactDOM.render( <CounterApp value={cedula} />, divRoot );