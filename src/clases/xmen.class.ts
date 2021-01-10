
// Los Decoradores no son de uso recurrente,
// sirven para añadir funcionalidad a clase, añadiendo caracteristicas y funcionalidades propias

function imprimirConsola( contructorClase: Function ) {
     console.log( contructorClase );   
}

@imprimirConsola
export class Xmen  {

    constructor(
        public nombre: string,
        public clave: string
    ){}

    imprimir(){
        console.log(`${ this.nombre } - ${ this.clave }`);
    }
}