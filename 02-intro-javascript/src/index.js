
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes;

//console.log(p3)

const retornarArreglo = () => {
  return ['ABC', 123, "!#$%"];
}

const [ , , caracteres] = retornarArreglo();
console.log(caracteres);

console.log("TAREA ==>")
/**Tarea
 *1. el primer valor de arr se llamará nombre
 *2. se llamará setNombre
 */
const useState = (valor) => {
  return [ valor, () => {
    console.log("Hola mundo");
  }
  ]
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();