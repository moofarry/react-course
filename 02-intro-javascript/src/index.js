import { getHeroesById } from './bases/08-imp-xpo';

const promesa = new Promise( (resolve, reject) => {
  setTimeout( () => {

    const heroe = getHeroesById(2);
    console.log(heroe);

    resolve();
  }, 2000)
});

promesa.then(() => {
  console.log("then de la promesa")
});

