(() =>{
    const retirarDinero = ( montoRetirar: number) : Promise<number> => {
        let dineroActual = 600;

        return new Promise( (resolve, reject) => {

            if(montoRetirar > dineroActual) {
                reject('No hay suficiente saldo');
            }else{
                dineroActual -= montoRetirar;
                resolve( dineroActual );
            }
        });
    } 
    
    retirarDinero( 1500 )
        .then( montoActual => console.log(`Monto Actual ${ montoActual }`))
        .catch(console.warn)
      // .catch(err => console.warn(err)
})();