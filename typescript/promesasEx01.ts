(() => {
    console.log('Inicio del proceso');

    const prom1 = new Promise(( resolve, reject ) => {
     setTimeout(() => {
        reject('Se termino el timeout');
     },3000);
  });

  prom1.then( mensaje => console.log( mensaje ))
       .catch(console.warn)
  console.log('Fin');
})();