import { getHeroesById } from './bases/08-imp-xpo';

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {

    const heroe = getHeroesById(2);
    console.log(heroe);
    resolve();
  }, 2000)
});

promesa.then((heroe) => {
  console.log("heroe", heroe)
})
.catch(err => console.warn(err));
*/

const getHeroeByIdAsync = ( id ) => {

  return new Promise( (resolve, reject) => {

      setTimeout( () =>  {
          // Tarea
          // importen el 
          const p1 = getHeroesById( id );
          if ( p1 ) {
              resolve( p1 );
          } else {
              reject( 'No se pudo encontrar el héroe' );
          }
      }, 2000 )
  
  });


}


getHeroeByIdAsync(10)
  .then( console.log )
  .catch( console.warn );
