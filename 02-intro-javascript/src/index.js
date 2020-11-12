/*
const activo = true;
let mensaje= '';

if (!activo) {
  mensaje = 'Activo';
} else {
  mensaje = 'Inactivo';
}
console.log(mensaje);
*/

/**
const activo = true;
const mensaje = (activo) ? 'Activo' : 'Inactivo' ;
console.log(mensaje)
 */
const activo = true;
const mensaje = activo && 'Activo';
console.log(mensaje)