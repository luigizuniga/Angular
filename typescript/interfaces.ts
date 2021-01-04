(() => { 
    interface xmen {
        nombre: string,
        edad: number,
        poder?: string
    }

    const enviarMision = ( xmen: xmen ) => {
        console.log(`Enviando a ${ xmen.nombre } a la mision`);
    } 

    const regresarAlCuartel = ( xmen: xmen ) => {
        console.log(`Enviado a ${ xmen.nombre } a la mision`);
    }

    const wolverine = {
      nombre: 'logan',
      edad: 130
    }

    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
})()