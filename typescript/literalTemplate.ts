{
    () => {
        let mensaje: string = 'Hello';
        let hoy: Date = new Date();
        
        let spiderman = {
            nombre: '',
            edad: 0
        }

        spiderman = {
            nombre: 'Alex',
            edad: 31
        }

        //Template Literales 
        const salida = `${mensaje} edad ${spiderman.edad} ${spiderman.nombre} año ${hoy.getUTCFullYear()}`;
        console.table(salida);
    }
}