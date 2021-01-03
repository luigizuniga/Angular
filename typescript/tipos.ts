(function(){
    //Declaracion y asignacion de variables 
    let mensaje: string =  'Hello';
    let numero: number = 30;
    let booleano: boolean = true;
    let hoy: Date = new Date();


    let anything;
    anything = mensaje;
    anything = numero;
    anything = booleano;
    anything = hoy;

    
    //Declaracion de Objeto
    let spiderman = {
        nombre: '',
        edad: 0
    }

    spiderman = {
        nombre: 'Alex',
        edad: 31
    }
    
    //Template Literales 
    const salida = `${ mensaje } edad ${ spiderman.edad } ${ spiderman.nombre } año ${ hoy.getUTCFullYear() }`;
    console.table( salida );

    //Parametros opcionales, Obligatorios y por defecto
    function activar(quien: string, 
                     objeto: string = 'batiseñal', 
                     momento?: string) {
        if( momento ){
            console.log(`${ quien } activó la ${ objeto } en la ${ momento }`);
        }else{
            console.log(`${ quien } activó la ${ objeto }`);
        }
    }

    activar('Gordon');
    activar('Gordon','batiseñal','noche');
})();