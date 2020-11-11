const persona = {
  nombre : 'Tony',
  apellido : 'Stark',
  edad: 24,
  direccion : {
    ciudad: 'New York',
    calle : '1',
    zip : '2131232',
  }
};
const persona2 = {... persona };
persona2.nombre = 'Com';
console.log(persona);
console.log(persona2);