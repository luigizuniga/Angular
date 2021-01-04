(() => {
    //Desestructuracion (Extraccion) de propiedades del Objeto
    const avenger = {
        nombre: 'Weed Man',
        clave: 'Capitan Weed',
        poder: 'Eternal Weed'
    }
    
    const { nombre , clave } = avenger;
    console.log(nombre);
    console.log(clave);
    
    //Desestructuracion (Extraccion)  de argumentos del Objeto por medio de una funcion
    const extraer = ({ nombre, poder }: any) =>{
        console.log(`${ nombre } y sus poder es ${ poder }` );   
    }
    
    extraer(avenger);
    
    //Desestructuracion (Extraccion) de Arreglos por medio de una funcion
    const avengers: string [] = ['Thor','Ironman','Spiderman'];
    const extraerAvengers = ([thor,ironman,spiderman]: string[]) => {
       console.log(thor); 
       console.log(ironman); 
       console.log(spiderman); 
    }
    extraerAvengers(avengers);
})();