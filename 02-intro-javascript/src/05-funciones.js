function saludar1(nombre) {
  return `Hola, ${nombre}`;

}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar1('Goku'));
console.log(saludar2('Vegetta'));
console.log(saludar3('Trunks'));


const getUser = () => 
  ({
    uid: 'ABC123',
    username: 'El_pepe'
  });

console.log(getUser())

/**Tarea
 * 1. Transformar a una función flecha
 * 2. Tiene que retornar un objeto implicito
 * 3. Pruebas
 */

function getUsuarioActivo(nombre) {
  return {
    uid : 'ABC567',
    username: nombre
  }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);



/**Solucion */

console.log("Solucion tarea")

const getUsuarioActivo2 = (nombre) =>
  ({
    uid : 'ABC567',
    username: nombre
  })

const usuarioActivo2 = getUsuarioActivo2('Fernando');
console.log(usuarioActivo2);